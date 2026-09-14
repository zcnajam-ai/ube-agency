import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

// Execute the real email module with an isolated provider; no emails are sent.
const source = ts.transpileModule(fs.readFileSync('src/lib/emailService.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const inquiry = {name: 'QA Test', email: 'qa@example.invalid', service: 'Store design', budget: 'Unspecified', timeline: 'Flexible', description: 'Automated test only'};
function setup(replies, configured = true) {
  const calls = [], logs = [];
  const exports = {};
  const context = {exports, process: {env: configured ? {RESEND_API_KEY: 'test-only'} : {}}, console: {log: (...x) => logs.push(x), error: (...x) => logs.push(x)}, require: () => ({Resend: class {emails = {send: async (payload) => {calls.push(payload); const reply = replies.shift(); if (reply instanceof Error) throw reply; return reply;}}}})};
  vm.runInNewContext(source, context);
  return {send: exports.sendProjectInquiryEmails, calls, logs};
}
(async () => {
  let t = setup([], false);
  await assert.rejects(t.send(inquiry), /not configured/);
  assert.equal(t.calls.length, 0); assert.equal(t.logs.length, 0);
  t = setup([{error: {message: 'provider failure'}, data: null}]);
  await assert.rejects(t.send(inquiry), /not accepted/); assert.equal(t.calls.length, 1);
  t = setup([new Error('transport failure')]);
  await assert.rejects(t.send(inquiry)); assert.equal(t.calls.length, 1);
  t = setup([{data: {id: 'notification'}}, {error: {message: 'confirmation failure'}}]);
  await t.send(inquiry); assert.equal(t.calls.length, 2);
  assert.ok(!JSON.stringify(t.logs).includes(inquiry.email));
  t = setup([{data: {id: 'notification'}}, {data: {id: 'confirmation'}}]);
  await t.send(inquiry); assert.equal(t.calls.length, 2);
  assert.equal(t.calls[0].replyTo, inquiry.email);
  console.log('PASS: 5 inquiry-delivery scenarios; no network requests or live leads.');
})().catch(error => { console.error(error); process.exitCode = 1; });

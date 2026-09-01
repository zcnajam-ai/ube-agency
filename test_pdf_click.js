const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const pageUrl = 'https://unifiedbrandingexperts.com/work/fixoria-studio-brand-identity-system';

async function testPdfClick() {
  console.log('=== TESTING PDF MODAL BUTTON CLICK ON REAL PRODUCTION ===\n');

  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const browserExe = fs.existsSync(edgePath) ? edgePath : chromePath;

  const chromeProcess = spawn(browserExe, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=9226',
    '--window-size=1440,900',
    '--force-device-scale-factor=1',
    '--hide-scrollbars'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  http.get('http://localhost:9226/json', async res => {
    let rawData = '';
    res.on('data', chunk => { rawData += chunk; });
    res.on('end', async () => {
      try {
        const targets = JSON.parse(rawData);
        const pageTarget = targets.find(t => t.type === 'page') || targets[0];
        const wsUrl = pageTarget.webSocketDebuggerUrl;

        const ws = new globalThis.WebSocket(wsUrl);

        let id = 1;
        const send = (method, params = {}) => {
          return new Promise((resolve, reject) => {
            const currentId = id++;
            const msgHandler = event => {
              const data = JSON.parse(event.data);
              if (data.id === currentId) {
                ws.removeEventListener('message', msgHandler);
                if (data.error) reject(data.error);
                else resolve(data.result);
              }
            };
            ws.addEventListener('message', msgHandler);
            ws.send(JSON.stringify({ id: currentId, method, params }));
          });
        };

        ws.addEventListener('open', async () => {
          console.log('Navigating to production page:', pageUrl);
          await send('Page.navigate', { url: pageUrl });
          await new Promise(r => setTimeout(r, 4500));

          // Find and click "View Full Portfolio" button
          console.log('Clicking "View Full Portfolio" button...');
          const clickResult = await send('Runtime.evaluate', {
            expression: `(function() {
              const btns = Array.from(document.querySelectorAll('button'));
              const pdfBtn = btns.find(b => b.innerText.includes('View Full Portfolio'));
              if (pdfBtn) {
                pdfBtn.click();
                return { clicked: true, text: pdfBtn.innerText };
              }
              return { clicked: false, totalBtns: btns.length };
            })()`,
            returnByValue: true
          });

          console.log('Click Result:', clickResult.result ? clickResult.result.value : clickResult.value);

          await new Promise(r => setTimeout(r, 2000));

          // Check if PDF modal is open
          const modalResult = await send('Runtime.evaluate', {
            expression: `(function() {
              const modalHeader = document.querySelector('h3');
              const iframe = document.querySelector('iframe');
              const objectTag = document.querySelector('object');
              const openDirectBtn = Array.from(document.querySelectorAll('a')).find(a => a.innerText.includes('Open Direct'));
              return {
                modalTitle: modalHeader ? modalHeader.innerText : '',
                hasIframe: !!iframe,
                iframeSrc: iframe ? iframe.src : '',
                hasObject: !!objectTag,
                objectData: objectTag ? objectTag.data : '',
                hasOpenDirectBtn: !!openDirectBtn
              };
            })()`,
            returnByValue: true
          });

          const modalData = modalResult.result ? modalResult.result.value : modalResult.value;
          console.log('\n=== MODAL VERIFICATION METRICS ===');
          console.log('Modal Title:', modalData.modalTitle);
          console.log('PDF Object Data:', modalData.objectData);
          console.log('PDF Iframe Src:', modalData.iframeSrc);
          console.log('Open Direct Button Present:', modalData.hasOpenDirectBtn);

          ws.close();
          chromeProcess.kill();
          process.exit(0);
        });
      } catch (e) {
        console.error('Test error:', e);
        chromeProcess.kill();
        process.exit(1);
      }
    });
  });
}

testPdfClick();

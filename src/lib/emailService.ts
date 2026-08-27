import { Resend } from "resend";

export interface ProjectInquiryPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
  sourcePage?: string;
  submittedAt?: string;
}

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const RECIPIENT_EMAIL =
  process.env.PROJECT_INQUIRY_RECIPIENT_EMAIL || "info@unifiedbrandingexperts.com";
const FROM_EMAIL =
  process.env.PROJECT_INQUIRY_FROM_EMAIL ||
  "Unified Branding Experts <info@unifiedbrandingexperts.com>";

/**
 * Sends both internal UBE notification & client confirmation email.
 */
export async function sendProjectInquiryEmails(inquiry: ProjectInquiryPayload) {
  const submittedDate = inquiry.submittedAt || new Date().toLocaleString("en-US", { timeZone: "UTC" });
  const firstName = inquiry.name.split(" ")[0] || inquiry.name;

  // Build Internal Notification HTML
  const internalHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #FAF7F6; color: #161616; padding: 24px; margin: 0; }
    .container { max-width: 600px; background: #ffffff; border: 1px solid #E0DDDB; border-radius: 16px; padding: 32px; margin: 0 auto; }
    .header { font-size: 20px; font-weight: 800; color: #161616; margin-bottom: 24px; border-bottom: 2px solid #9F8BE7; padding-bottom: 12px; }
    .field-row { margin-bottom: 16px; font-size: 14px; line-height: 1.5; }
    .field-label { font-weight: 700; color: #585858; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px; }
    .field-value { color: #161616; font-size: 14px; background: #FAF7F6; padding: 10px 14px; border-radius: 8px; border: 1px solid #E0DDDB; }
    .message-box { background: #FAF7F6; padding: 16px; border-radius: 12px; border-left: 4px solid #9F8BE7; font-size: 14px; line-height: 1.6; white-space: pre-wrap; }
    .footer { font-size: 11px; color: #888888; margin-top: 24px; text-align: center; border-top: 1px solid #E0DDDB; padding-top: 16px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">NEW PROJECT INQUIRY</div>

    <div class="field-row">
      <span class="field-label">Client Name</span>
      <div class="field-value"><strong>${escapeHtml(inquiry.name)}</strong></div>
    </div>

    <div class="field-row">
      <span class="field-label">Email Address</span>
      <div class="field-value"><a href="mailto:${escapeHtml(inquiry.email)}">${escapeHtml(inquiry.email)}</a></div>
    </div>

    <div class="field-row">
      <span class="field-label">Phone / WhatsApp</span>
      <div class="field-value">${escapeHtml(inquiry.phone || "Not Provided")}</div>
    </div>

    <div class="field-row">
      <span class="field-label">Company / Brand Name</span>
      <div class="field-value">${escapeHtml(inquiry.company || "Not Provided")}</div>
    </div>

    <div class="field-row">
      <span class="field-label">Selected Service</span>
      <div class="field-value"><strong>${escapeHtml(inquiry.service)}</strong></div>
    </div>

    <div class="field-row">
      <span class="field-label">Estimated Budget</span>
      <div class="field-value"><strong>${escapeHtml(inquiry.budget)}</strong></div>
    </div>

    <div class="field-row">
      <span class="field-label">Timeline</span>
      <div class="field-value">${escapeHtml(inquiry.timeline)}</div>
    </div>

    <div class="field-row">
      <span class="field-label">Project Details &amp; Goals</span>
      <div class="message-box">${escapeHtml(inquiry.description)}</div>
    </div>

    <div class="field-row" style="margin-top: 20px;">
      <span class="field-label">Submission Metadata</span>
      <div style="font-size: 12px; color: #585858;">
        Submitted: ${escapeHtml(submittedDate)}<br>
        Source Page: ${escapeHtml(inquiry.sourcePage || "https://unifiedbrandingexperts.com")}
      </div>
    </div>

    <div class="footer">
      Unified Branding Experts Project Notification System
    </div>
  </div>
</body>
</html>
  `.trim();

  const internalText = `
NEW PROJECT INQUIRY

Name: ${inquiry.name}
Email: ${inquiry.email}
Phone: ${inquiry.phone || "Not Provided"}
Company: ${inquiry.company || "Not Provided"}

Service: ${inquiry.service}
Estimated Budget: ${inquiry.budget}
Timeline: ${inquiry.timeline}

Project Details & Goals:
${inquiry.description}

Submitted: ${submittedDate}
Source Page: ${inquiry.sourcePage || "https://unifiedbrandingexperts.com"}
  `.trim();

  // Build Branded Client Confirmation HTML
  const clientHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #FAF7F6; color: #161616; padding: 24px; margin: 0; }
    .container { max-width: 600px; background: #ffffff; border: 1px solid #E0DDDB; border-radius: 16px; padding: 36px; margin: 0 auto; box-shadow: 0 4px 20px rgba(0,0,0,0.03); }
    .logo-bar { text-align: left; margin-bottom: 28px; border-bottom: 1px solid #E0DDDB; padding-bottom: 20px; }
    .brand-title { font-size: 20px; font-weight: 800; color: #161616; letter-spacing: -0.02em; text-transform: uppercase; }
    .greeting { font-size: 16px; font-weight: 700; color: #161616; margin-bottom: 16px; }
    .body-copy { font-size: 14px; line-height: 1.6; color: #303030; margin-bottom: 24px; }
    .summary-card { background: #FAF7F6; border: 1px solid #E0DDDB; border-radius: 12px; padding: 20px; margin-bottom: 24px; }
    .summary-title { font-size: 11px; font-weight: 700; color: #9F8BE7; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px; }
    .summary-item { font-size: 13px; color: #161616; margin-bottom: 8px; }
    .summary-item strong { font-weight: 700; color: #161616; }
    .signature { font-size: 13px; line-height: 1.6; color: #585858; border-top: 1px solid #E0DDDB; padding-top: 20px; margin-top: 28px; }
    .signature strong { color: #161616; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo-bar">
      <div class="brand-title">UNIFIED BRANDING EXPERTS</div>
    </div>

    <div class="greeting">Hi ${escapeHtml(firstName)},</div>

    <div class="body-copy">
      Thank you for reaching out to Unified Branding Experts.
      <br><br>
      We&rsquo;ve received your project inquiry and our team will review the information you provided. We&rsquo;ll follow up with you regarding the next steps.
    </div>

    <div class="summary-card">
      <div class="summary-title">Summary of Your Request</div>
      <div class="summary-item"><strong>Service:</strong> ${escapeHtml(inquiry.service)}</div>
      <div class="summary-item"><strong>Estimated Budget:</strong> ${escapeHtml(inquiry.budget)}</div>
      <div class="summary-item"><strong>Timeline:</strong> ${escapeHtml(inquiry.timeline)}</div>
    </div>

    <div class="body-copy">
      If you need to add anything to your request, simply reply to this email.
    </div>

    <div class="signature">
      <strong>Best,</strong><br>
      Unified Branding Experts<br>
      Digital Branding, Technology &amp; Growth<br><br>
      +1 224-266-8081<br>
      <a href="mailto:info@unifiedbrandingexperts.com" style="color: #9F8BE7; text-decoration: none;">info@unifiedbrandingexperts.com</a>
    </div>
  </div>
</body>
</html>
  `.trim();

  const clientText = `
Hi ${firstName},

Thank you for reaching out to Unified Branding Experts.

We've received your project inquiry and our team will review the information you provided. We'll follow up with you regarding the next steps.

Here's a quick summary of your request:

Service: ${inquiry.service}
Estimated Budget: ${inquiry.budget}
Timeline: ${inquiry.timeline}

If you need to add anything to your request, simply reply to this email.

Best,
Unified Branding Experts
Digital Branding, Technology & Growth

+1 224-266-8081
info@unifiedbrandingexperts.com
  `.trim();

  // Execute Dispatch via Resend SDK or Log in Development
  if (resend) {
    try {
      // 1. Internal UBE Notification
      await resend.emails.send({
        from: FROM_EMAIL,
        to: [RECIPIENT_EMAIL],
        replyTo: inquiry.email,
        subject: `New Project Inquiry — ${inquiry.service} — ${inquiry.name}`,
        html: internalHtml,
        text: internalText,
      });

      // 2. Client Confirmation
      await resend.emails.send({
        from: FROM_EMAIL,
        to: [inquiry.email],
        subject: "We’ve Received Your Project Inquiry | Unified Branding Experts",
        html: clientHtml,
        text: clientText,
      });

      console.log(`[Email Dispatch Success] Sent notification & confirmation for ${inquiry.email}`);
    } catch (err) {
      console.error("[Email Dispatch Error]", err);
      // Do not throw so client still receives clean HTTP response if email fails in staging
    }
  } else {
    console.log("=================================================");
    console.log("[DEV EMAIL LOG - RESEND_API_KEY NOT SET]");
    console.log(`Internal To: ${RECIPIENT_EMAIL} | ReplyTo: ${inquiry.email}`);
    console.log(`Subject: New Project Inquiry — ${inquiry.service} — ${inquiry.name}`);
    console.log(internalText);
    console.log("-------------------------------------------------");
    console.log(`Client To: ${inquiry.email}`);
    console.log("Subject: We’ve Received Your Project Inquiry | Unified Branding Experts");
    console.log(clientText);
    console.log("=================================================");
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

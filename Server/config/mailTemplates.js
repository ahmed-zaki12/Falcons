const baseStyles = {
  container: "background-color:#0d1117; color:#c9d1d9; font-family:Arial,Helvetica,sans-serif; font-size:16px; line-height:1.5; max-width:600px; margin:0 auto; border-radius:8px; overflow:hidden; border:1px solid #30363d;",
  header: "background-color:#161b22; padding:24px; text-align:center; border-bottom:1px solid #30363d;",
  logo: "width:80px; height:auto;",
  content: "padding:32px;",
  title: "font-size:24px; font-weight:bold; color:#58a6ff; margin:0 0 16px 0;",
  text: "margin:0 0 16px 0;",
  highlight: "color:#58a6ff; font-weight:bold;",
  footer: "padding:24px; text-align:center; font-size:12px; color:#8b949e; border-top:1px solid #30363d;",
  footerLink: "color:#58a6ff; text-decoration:none;"
};

const defaultSignatureHtml = () => `
<div style="${baseStyles.footer}">
  <div>Best regards,</div>
  <div><strong>The Falcons Team</strong></div>
  <div style="margin-top:16px;">
    <a href="https://falcons-eg.tech" style="${baseStyles.footerLink}">falcons-eg.tech</a>
  </div>
</div>`;

const templates = {
  'join-us-confirmation': {
    from: 'info',
    subject: 'Thank You for Your Application to Falcons!',
    getText: ({ name }) =>
      `Hi ${name},\n\nThank you for applying to join Falcons. We've successfully received your application, and our team is currently reviewing it.\n\nWe appreciate your interest in our community and will be in touch with the next steps soon.\n\nUntil then, keep building, keep exploring, and remember: Own the Sky.\n\nBest regards,\nThe Falcons Team`,
    getHtml: ({ name, logoUrl, cidLogoName }) => {
      const fallbackLogo = logoUrl || process.env.LOGO_URL || 'https://i.imgur.com/tE2wV5A.png';
      const logoSrc = cidLogoName ? `cid:${cidLogoName}` : fallbackLogo;
      return `
<div style="${baseStyles.container}">
  <div style="${baseStyles.header}">
    <img src="${logoSrc}" alt="Falcons Logo" style="${baseStyles.logo}" />
  </div>
  <div style="${baseStyles.content}">
    <h1 style="${baseStyles.title}">Your Application is in Review!</h1>
    <p style="${baseStyles.text}">Hi ${name},</p>
    <p style="${baseStyles.text}">Thank you for applying to join <span style="${baseStyles.highlight}">Falcons</span>. We've successfully received your application, and our team is now reviewing it.</p>
    <p style="${baseStyles.text}">We appreciate your interest in our community and will be in touch with the next steps soon.</p>
    <p style="${baseStyles.text}">Until then, keep building, keep exploring, and remember: <strong style="${baseStyles.highlight}">Own the Sky</strong>.</p>
  </div>
  ${defaultSignatureHtml()}
</div>`;
    }
  },
};

export const getMailTemplate = (templateName, data) => {
  const template = templates[templateName];
  if (!template) {
    return null;
  }

  return {
    from: template.from,
    subject: template.subject,
    text: template.getText?.(data),
    html: template.getHtml?.(data),
  };
};
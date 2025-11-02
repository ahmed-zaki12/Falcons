import { mailAccounts } from "../config/mailConfig.js";
import { getMailTemplate } from "../config/mailTemplates.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// A simple regex for email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const sendMail = async (req, res) => {
    try {
        const { template: templateName, recipient, logoUrl, signatureHtml } = req.body;

        if (!templateName || !recipient || !recipient.email || !recipient.name) {
            return res.status(400).json({ message: "Missing template name or recipient details." });
        }

        if (!emailRegex.test(recipient.email)) {
            return res.status(400).json({ message: "Invalid recipient email format." });
        }

        // Prepare optional CID logo attachment when no external logoUrl provided
        let attachments = undefined;
        let cidLogoName = undefined;
        if (!logoUrl) {
            try {
                const __filename = fileURLToPath(import.meta.url);
                const __dirname = path.dirname(__filename);
                // Path to the client asset image
                const clientLogoPath = path.resolve(__dirname, "../../Client/src/assets/Falcon3.png");
                if (fs.existsSync(clientLogoPath)) {
                    const cid = "falcon-logo";
                    attachments = [
                        {
                            filename: "FalconsLogo.png",
                            path: clientLogoPath,
                            cid,
                            contentType: "image/png",
                        },
                    ];
                    cidLogoName = cid;
                }
            } catch (_) {
                // Ignore attachment failures silently; email will send without background image
            }
        }

        const template = getMailTemplate(templateName, {
            name: recipient.name,
            logoUrl,
            signatureHtml,
            cidLogoName,
        });

        if (!template) {
            return res.status(400).json({ message: "Invalid email template selected." });
        }

        const { from, subject, text, html } = template;

        const transporter = mailAccounts[from];
        if (!transporter) {
            return res.status(400).json({ message: "Invalid sender email selected for this template." });
        }

        const senderEmail = process.env[`${from.toUpperCase()}_USER`];
        if (!senderEmail) {
            console.error(`Sender email for '${from}' is not configured in environment variables.`);
            console.log("process.env.INFO_USER:", process.env.INFO_USER); // Add this line
            return res.status(500).json({ message: "Server configuration error." });
        }

        const mailOptions = {
            from: senderEmail,
            to: recipient.email,
            subject,
            text: text || undefined,
            html: html || undefined,
            attachments,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: `Email sent successfully to ${recipient.email}` });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send email" });
    }
};

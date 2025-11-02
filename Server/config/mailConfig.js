import nodemailer from "nodemailer";

const createTransporter = (user, pass) => {
    return nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        secure: true,
        auth: { user, pass },
    });
};

export const mailAccounts = {
    info: createTransporter(process.env.INFO_USER, process.env.INFO_PASS),
    support: createTransporter(process.env.SUPPORT_USER, process.env.SUPPORT_PASS),
    admin: createTransporter(process.env.ADMIN_USER, process.env.ADMIN_PASS),
    ctf: createTransporter(process.env.CTF_USER, process.env.CTF_PASS),
};

export const senderEmails = {
    info: process.env.INFO_USER,
    support: process.env.SUPPORT_USER,
    admin: process.env.ADMIN_USER,
    ctf: process.env.CTF_USER,
};

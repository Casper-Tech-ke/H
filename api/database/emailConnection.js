const nodemailer = require('nodemailer');











const port = Number(process.env.SMTP_PORT || 587);
const auth = process.env.SMTP_USER && process.env.SMTP_PASSWORD
    ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD }
    : undefined;

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
    port,
    secure: process.env.SMTP_SECURE === 'true' || port === 465,
    ...(auth && { auth })
});


module.exports = transporter;
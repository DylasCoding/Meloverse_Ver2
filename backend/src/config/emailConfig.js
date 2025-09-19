// backend/src/config/emailConfig.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'range.woods10@gmail.com',
        pass: 'gasm cofm qxvj cwnd'
    }
});

module.exports = transporter;
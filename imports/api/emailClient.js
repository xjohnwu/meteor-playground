"use strict"

const nodemailer = require('nodemailer');

export default class EmailClient {
    constructor(smtpOptions) {
        this.smtpOptions = { ...smtpOptions };
        this.smtpOptions.tls = { rejectUnauthorized: false };
        this.transporter = nodemailer.createTransport(this.smtpOptions);
    };

    sendMail(mailOptions) {
        this.transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    };
};
"use strict"

import { inspect } from 'util'
import { smtpOptions, alertOptions } from './secret';
const EmailClient = require('./emailClient').default;
const emailClient = new EmailClient(smtpOptions);

export function sendError(error) {
    let mailOptions = { ...alertOptions };
    mailOptions.text = inspect(error);
    emailClient.sendMail(mailOptions);
};
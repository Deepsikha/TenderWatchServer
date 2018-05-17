import httpStatus from 'http-status';
import Winston from 'winston';
import mailer from 'nodemailer';
import APIError from '../../helpers/APIError';
import config from '../../config/env';


const logger = new (Winston.Logger)({
    transports: [
        new (Winston.transports.File)({filename: 'logs/sent-email.log'})
    ]
});

const mailServices = [
    "126",
    "163",
    "1und1",
    "AOL",
    "DebugMail",
    "DynectEmail",
    "FastMail",
    "GandiMail",
    "Gmail",
    "Godaddy",
    "GodaddyAsia",
    "GodaddyEurope",
    "hot.ee",
    "Hotmail",
    "iCloud",
    "mail.ee",
    "Mail.ru",
    "Maildev",
    "Mailgun",
    "Mailjet",
    "Mailosaur",
    "Mandrill",
    "Naver",
    "OpenMailBox",
    "Outlook365",
    "Postmark",
    "QQ",
    "QQex",
    "SendCloud",
    "SendGrid",
    "SendinBlue",
    "SendPulse",
    "SES",
    "SES-US-EAST-1",
    "SES-US-WEST-2",
    "SES-EU-WEST-1",
    "Sparkpost",
    "Yahoo",
    "Yandex",
    "Zoho",
    "qiye.aliyun"
]; //all the mail services that nodemailer supports.

function sendSupportMail(req, res, next) {
    const smtpTransport = mailer.createTransport({
        service: "Gmail", //mailServices[mailServices.indexOf(req.body.mailservice)]
        auth: {
            user: req.body.authEmail || config.email,
            pass: req.body.password || config.password
        }
    });
    const mail = {
        from: `support ${req.body.email} <${req.body.email}>`,
        cc: ['tenderwatch01@gmail.com'],
        to: 'tenderwatch01@gmail.com',
        subject: req.body.subject,
        html: req.body.description
    };

    if (res.locals.session.email !== req.body.email) {
        mail.cc.push(res.locals.session.email);
    }

    smtpTransport.sendMail(mail, (error, response) => {
        if (error) {
            logger.log('error', `error while sending mail with error: ${error}`);
            next(new APIError(error.message, httpStatus.INTERNAL_SERVER_ERROR));
        } else {
            logger.log('Response', `Email sent with response: ${response}`);
            res.sendStatus(httpStatus.OK);
            smtpTransport.close();
        }
    });
}

export default {sendSupportMail};

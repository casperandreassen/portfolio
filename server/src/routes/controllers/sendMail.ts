import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import Logger from '../../utils/logger';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sendMail = async (req: Request, res: Response) => {
  const message = {
    from: 'server@andreassen.dev',
    to: 'c@andreassen.dev',
    subject: req.query.title,
    text: req.query.body,
    replyTo: req.query.fromEmail,
  };

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.me.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_LOGIN,
      pass: process.env.ICLOUD_AUTH_KEY,
    },
  });

  transporter.sendMail(message, (error) => {
    if (error) {
      Logger.error(`Mail request failed to: ${req.query.fromEmail} with title: ${req.query.title} and body: ${req.query.body}`);
      return res.status(503).json();
    }
    Logger.info(`Email sent to owner from ${req.query.fromEmail}`);
    return res.status(201).json();
  });
};

export { sendMail };

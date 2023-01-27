import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

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
      user: 'c.salminen@icloud.com',
      pass: 'zxaw-bssf-uerr-dzto',
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      return res.status(503);
    }
  });

  transporter.sendMail(message, (error, info) => {
    if (error) {
      return res.status(503);
    }
    return res.status(201);
  });
};

export { sendMail };

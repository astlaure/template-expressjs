import 'dotenv/config';
import nodemailer from 'nodemailer';
import hbs from 'hbs';
import path from 'path';
import en from './locales/en';
import fr from './locales/fr';
import fs from 'fs/promises';

const mailUtil = {
  mailer: nodemailer.createTransport({
    pool: true,
    host: process.env.SMTP_HOST,
    port: +process.env.SMTP_PORT!,
    secure: false, // use TLS
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  }),

  languages: { en, fr } as any,

  sendResetPasswordMail: async (email: string, language: string) => {
    const data = {
      appName: 'Template ExpressJS',
      labels: mailUtil.languages[language],
    };

    const template = hbs.handlebars.compile(await fs.readFile(
      path.resolve(__dirname, 'templates/reset-password.hbs'), { encoding: 'utf-8' }));

    await mailUtil.mailer.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Reset Password',
      html: template(data),
    });
  },
};

export default mailUtil;

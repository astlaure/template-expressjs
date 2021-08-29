import 'dotenv/config';
import nodemailer from 'nodemailer';
import hbs from 'hbs';
import path from 'path';
import fs from 'fs/promises';
import en from '../../mails/locales/en.json';
import fr from '../../mails/locales/fr.json';

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

  sendEmail: async (name: string, email: string, language: string, context: any) => {
    const data = {
      ...context,
      labels: mailUtil.languages[language][name],
    };

    const template = hbs.handlebars.compile(await fs.readFile(
      path.resolve(`mails/templates/${name}.hbs`), { encoding: 'utf-8' }));

    await mailUtil.mailer.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: data.labels.subject,
      html: template(data),
    });
  },
};

export default mailUtil;

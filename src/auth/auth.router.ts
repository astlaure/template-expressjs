import express from 'express';
import passport from 'passport';
import auth from './auth.middleware';
import mailUtil from '../mails/mail.util';

const authRouter = express.Router();
const local = passport.authenticate('local', { session: true });

authRouter.get('/profile', auth, (req, res) => {
  return res.json(req.user);
});

authRouter.post('/login', local, (req, res) => {
  return res.json(req.user);
});

authRouter.post('/logout', auth, (req, res) => {
  req.logout();
  return res.sendStatus(200);
});

authRouter.post('/forgot-password', async (req, res) => {
  const { email, language } = req.body;

  await mailUtil.sendResetPasswordMail(email, language);

  return res.sendStatus(200);
});

authRouter.post('/reset-password', (req, res) => {
  req.logout();
  return res.sendStatus(200);
});

export default authRouter;

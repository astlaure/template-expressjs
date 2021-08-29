import express from 'express';
import passport from 'passport';
import auth from './auth.middleware';

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

export default authRouter;

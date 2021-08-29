import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
import csurf from 'csurf';
import errorHandler from './errors/error.handler';
import csrf from './auth/csrf/csrf.middleware';
import authRouter from './auth/auth.router';
import './auth/auth.setup';

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({ secret: process.env.APP_SECRET }));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate('remember-me'));
app.use(csurf());

app.use(csrf);
app.use('/auth', authRouter);

app.use(errorHandler);

export default app;

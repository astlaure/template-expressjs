import passport from 'passport';
import LocalStrategy from './local/local.strategy';
import RememberMeStrategy from './remember-me/remember-me.strategy';
import User from '../users/user.model';

passport.use(LocalStrategy);
passport.use(RememberMeStrategy);

passport.serializeUser((user, done) => {
  const { id } = user as User;
  return done(null, id);
});

passport.deserializeUser(async (id: number, done) => {
  const user = await User.findByPk(id);
  return done(null, user);
});

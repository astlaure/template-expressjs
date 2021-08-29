import { Strategy } from 'passport-remember-me-extended';
import User from '../../users/user.model';
import tokenUtil from '../tokens/token.util';

const RememberMeStrategy = new Strategy(async (token: string, done) => {
  try {
    const user = await User.findOne({ where: { token } });

    if (!user) {
      return done(null, false);
    }

    user.token = null;
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}, async (user: User, done) => {
  try {
    user.token = tokenUtil.generate();
    await user.save();

    return done(null, user.token);
  } catch (err) {
    return done(err);
  }
});

export default RememberMeStrategy;

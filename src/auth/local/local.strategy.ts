import { Strategy } from 'passport-local';
import User from '../../users/user.model';
import passwordUtil from '../passwords/password.util';

const LocalStrategy = new Strategy({
  session: true,
}, async (username, password, done) => {
  try {
    const user = await User.findOne({ where: { username } });

    if (!user || !(await passwordUtil.compare(password, user.password))) {
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

export default LocalStrategy;

import { CreateUserDto } from './interfaces/create-user.dto';
import User from './user.model';
import passwordUtil from '../auth/passwords/password.util';

const userUtil = {
  create: async (createUser: CreateUserDto) => {
    const data = {
      ...createUser,
      password: await passwordUtil.hash(createUser.password),
    };
    await User.create(data);
  },
};

export default userUtil;

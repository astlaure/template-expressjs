import prompts from 'prompts';
import userUtil from '../user.util';
import logger from '../../core/logger';

const userCreateCommand = async () => {
  try {
    const answers = await prompts([
      { name: 'name', type: 'text', message: 'Name?' },
      { name: 'username', type: 'text', message: 'Username?' },
      { name: 'password', type: 'password', message: 'Password?' },
      { name: 'confirmation', type: 'password', message: 'Confirmation?' },
    ]);

    await userUtil.create(answers);

    logger.info('User created successfully.');
  } catch (err) {
    logger.error(err);
  }
};

export default userCreateCommand;

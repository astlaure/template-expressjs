import logger from './core/logger';
import userCreateCommand from './users/commands/user-create.command';

const argv = process.argv.slice(2);

(async () => {
  switch (argv[0]) {
    case 'user:create':
      await userCreateCommand();
      process.exit(0);
      break;
    default:
      logger.warn('Unknown command.');
      process.exit(0);
  }
})();

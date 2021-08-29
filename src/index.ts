import 'dotenv/config';
import app from './app';
import database from './database';
import logger from './core/logger';

(async () => {
  try {
    if (process.env.NODE_ENV === 'production') {
      await database.authenticate();
    } else {
      await database.sync();
    }
    app.listen(process.env.APP_PORT, () => logger.info('server started.'));
  } catch (err) {
    logger.error(err);
  }
})()

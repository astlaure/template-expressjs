import 'dotenv/config';
import { Options } from 'sequelize';

interface DatabaseConfig {
  [env: string]: Options;
}

const config: DatabaseConfig = {
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
  },
  development: {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    dialect: 'mysql',
  },
  production: {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    dialect: 'mysql',
  },
};

export default module.exports = config;

import { Sequelize } from 'sequelize';
import config from './config';

const database = new Sequelize(config[process.env.NODE_ENV || 'development']);

export default database;

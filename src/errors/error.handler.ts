import { NextFunction, Request, Response } from 'express';
import logger from '../core/logger';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error('error');
  logger.error(err);
  return res.sendStatus(500);
};

export default errorHandler;

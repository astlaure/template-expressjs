import { NextFunction, Request, Response } from 'express';

const auth = (req: Request, res: Response, next: NextFunction) => {
  if (req.isUnauthenticated()) {
    return res.sendStatus(401);
  }
  return next();
};

export default auth;

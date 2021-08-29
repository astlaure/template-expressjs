import { NextFunction, Request, Response } from 'express';

const asyncHandler = (func: (req: Request, res: Response) => any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(func(req, res))
      .catch((err) => next(err));
  };
};

export default asyncHandler;

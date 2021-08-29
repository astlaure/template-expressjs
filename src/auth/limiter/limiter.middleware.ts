import rateLimit from 'express-rate-limit';

const limiter = (max: number, minutes: number) => {
  return rateLimit({
    max,
    windowMs: minutes * 60 * 1000,
  });
};

export default limiter;

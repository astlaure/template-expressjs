import crypto from 'crypto';

const tokenUtil = {
  generate: () => {
    return crypto.randomBytes(16).toString('hex');
  },
};

export default tokenUtil;

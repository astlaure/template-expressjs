import crypto from 'crypto';

const tokenUtil = {
  generate: async () => {
    return crypto.randomBytes(16).toString('hex');
  },
};

export default tokenUtil;

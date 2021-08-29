import logger from '../../core/logger';
import tokenUtil from '../tokens/token.util';

const generateKeyCommand = () => {
  return logger.info(tokenUtil.generate());
};

export default generateKeyCommand;

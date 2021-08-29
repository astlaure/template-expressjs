import HttpError from './http.error';

class UnauthenticatedError extends HttpError {
  constructor(message?: string) {
    super(401, message);
  }
}

export default UnauthenticatedError;

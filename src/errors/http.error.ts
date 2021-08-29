class HttpError extends Error {
  constructor(public readonly httpCode: number, message?: string) {
    super(message);
  }
}

export default HttpError;

import { AppError } from "../src/errors/AppError";

describe('AppError', () => {
  it('should initialize with message and statusCode', () => {
    const errorMessage = 'Test error message';
    const statusCode = 500;

    const error = new AppError(errorMessage, statusCode);

    expect(error.message).toEqual(errorMessage);
    expect(error.statusCode).toEqual(statusCode);
  });

  it('should initialize with default statusCode', () => {
    const errorMessage = 'Test error message';

    const error = new AppError(errorMessage);

    expect(error.statusCode).toEqual(400);
  });
});

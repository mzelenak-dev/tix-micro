import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  public statusCode = 400;
  public errors: ValidationError[];

  constructor(errors: ValidationError[]) {
    super('Invalid request parameters');
    this.errors = errors;

    // Set the prototype explicitly (needed for TypeScript + ES5 target)
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map(err => ({
      message: err.msg,
      // field: err.param,
    }));
  }
}
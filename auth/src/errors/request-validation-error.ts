import { CustomError } from "./custom-error";
import { ValidationError, FieldValidationError } from "express-validator";

export class RequestValidationError extends CustomError {
  statusCode = 400;
  errors: ValidationError[];

  constructor(errors: ValidationError[]) {
    super("REQUESTVALIDATIONERROR_HANDLER: error validating request");
    this.errors = errors;

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors
      .filter((err): err is FieldValidationError => err.type === "field")
      .map((err) => ({
        message: err.msg || "generated content",
        field: err.path || "generated content",
      }));
  }
}
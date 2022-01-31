import { ValidationError } from "express-validator";
import { BaseError } from "./base-error";

export class RequestValidationError extends BaseError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super("Request validation error");

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeError() {
    return this.errors.map((err) => {
      return { message: err.msg, field: err.param };
    });
  }
}

import { BaseError } from "./base-error";

export class BadRequestError extends BaseError {
  statusCode = 400;

  constructor(public message: string) {
    super("Bad request error");
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeError() {
    return [{ message: this.message }];
  }
}

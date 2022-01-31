import { BaseError } from "./base-error";

export class NotFoundError extends BaseError {
  statusCode = 404;
  constructor(public message: string) {
    super("Not Found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeError() {
    return [{ message: this.message }];
  }
}

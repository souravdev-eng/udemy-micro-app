import { BaseError } from "../errors/base-error";
// authorization

export class AuthorizationError extends BaseError {
  statusCode = 401;
  constructor() {
    super("Authorization Error");
    Object.setPrototypeOf(this, AuthorizationError.prototype);
  }

  serializeError() {
    return [{ message: "You are not authorized." }];
  }
}

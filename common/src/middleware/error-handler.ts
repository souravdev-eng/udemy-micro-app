import { NextFunction, Request, Response } from "express";
import { BaseError } from "../errors/base-error";

export const errorHandler = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof BaseError) {
    console.log(err.message);
    return res.status(err.statusCode).send({ errors: err.serializeError() });
  }
  res.status(500).send([{ errors: { message: "Something went wrong!", err } }]);
};

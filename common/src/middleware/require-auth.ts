import { NextFunction, Request, Response } from "express";
import { AuthorizationError } from "../errors/authorization-error";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    return next(new AuthorizationError());
  }
  next();
};

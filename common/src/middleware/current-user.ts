import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../errors/bad-request-error";

interface UserPayload {
  id: string;
}

declare global {
  namespace Express {
    interface Request {
      user: UserPayload | null;
    }
  }
}

export const currentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(
      new BadRequestError("You are not logged in! Please login first.")
    );
  }
  const decode = jwt.verify(token, process.env.JWT_KEY!) as UserPayload;

  req.user = decode;

  next();
};

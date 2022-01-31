import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../errors/bad-request-error";
import { NotFoundError } from "../errors/not-found-error";
import { User } from "../models/userModel";

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please enter a valid email or password");
  }

  const user = await User.findOne({ email });

  if (!user || (await user.correctPassword(user.password, password))) {
    throw new NotFoundError(`Invalid email or password! Please try again.`);
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_KEY!, {
    expiresIn: process.env.JWT_EXP!,
  });

  res.send({ token, user });
};

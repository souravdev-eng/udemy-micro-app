import { Response, Request, NextFunction } from "express";
import bcrypt from "bcryptjs";
import { BadRequestError, NotFoundError } from "@udemy-micro/common";
import jwt from "jsonwebtoken";

import { User } from "../models/userModel";

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new BadRequestError("Please enter a valid email or password");
    }

    const user = await User.findOne({ email });

    if (!user) {
      return next(
        new NotFoundError(`Invalid email or password! Please try again.`)
      );
    }
    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      return next(
        new NotFoundError(`Invalid email or password! Please try again.`)
      );
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_KEY!, {
      expiresIn: process.env.JWT_EXP!,
    });

    res.send({ token, user });
  } catch (error) {
    console.log(error);
  }
};

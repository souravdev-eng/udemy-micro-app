import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../errors/bad-request-error";
import { User } from "../models/userModel";

export const signUp = async (req: Request, res: Response) => {
  const { name, email, password, passwordConform } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new BadRequestError(
      `Email already in use. Please try with different email`
    );
  }

  const user = User.build({ name, email, password, passwordConform });
  await user.save();

  const token = jwt.sign({ id: user.id }, process.env.JWT_KEY!, {
    expiresIn: process.env.JWT_EXP!,
  });

  res.status(201).send({ token, user });
};

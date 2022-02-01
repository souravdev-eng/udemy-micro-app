import { BadRequestError } from "@udemy-micro/common";
import { Response, Request } from "express";
import { User } from "../models/userModel";

export const currentuser = async (req: Request, res: Response) => {
  const user = await User.findById(req.user!.id);

  if (!user) {
    throw new BadRequestError("You are not logged in! Please login first.");
  }

  res.send(user);
};

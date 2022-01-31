import { Response, Request } from "express";

export const currentuser = (req: Request, res: Response) => {
  res.send({ user: req.user });
};

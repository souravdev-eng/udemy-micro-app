import { NextFunction, Request, Response } from "express";

export const showOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Ok");
};

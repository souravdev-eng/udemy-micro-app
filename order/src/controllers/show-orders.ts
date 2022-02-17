import { NextFunction, Request, Response } from "express";
import { Order } from "../models/order-model";

export const showOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const orders = await Order.find({}).populate("course");

  res.status(200).send(orders);
};

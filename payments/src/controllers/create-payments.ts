import {
  AuthorizationError,
  BadRequestError,
  NotFoundError,
  OrderEventStatus,
} from "@udemy-micro/common";
import { Request, Response, NextFunction } from "express";
import { PaymentCreatedPublisher } from "../events/publisher/payment-created-publisher";
import { Order } from "../models/orderModel";
import { Payment } from "../models/paymentModel";
import { natsWrapper } from "../nats-wrapper";
import { stripe } from "../stripe";

export const createPayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token, orderId } = req.body;
  // 1. Check if order exists

  const order = await Order.findById(orderId);

  if (!order) {
    return next(new NotFoundError("Order not found"));
  }
  // 2. Check if user is authenticated
  if (req.user?.id !== order.userId) {
    return next(new AuthorizationError());
  }

  // 3. Check if order is not already cancelled
  if (order.orderStatus === OrderEventStatus.Cancelled) {
    return next(new BadRequestError("Order is already cancelled"));
  }
  // 4. create a charge: https://stripe.com/docs/charges

  const charge = await stripe.charges.create({
    amount: order.price * 100,
    currency: "inr",
    source: token,
  });

  // 5. Build payment doc
  const payment = Payment.build({
    orderId: order.id,
    paymentId: charge.id,
  });
  // 6. Save payment doc
  await payment.save();

  // 7. Publish payment.created event
  new PaymentCreatedPublisher(natsWrapper.client).published({
    id: payment.id,
    orderId: payment.orderId,
    paymentId: charge.id,
  });

  res.status(200).send(payment);
};

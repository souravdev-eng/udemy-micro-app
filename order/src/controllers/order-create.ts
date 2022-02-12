import { BadRequestError, NotFoundError } from "@udemy-micro/common";
import { NextFunction, Request, Response } from "express";

import { Order, OrderEventStatus } from "../models/order-model";
import { Course } from "../models/course-model";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const course = await Course.findById(req.body.courseId);

  if (!course) {
    return next(new NotFoundError("Course not found"));
  }

  const isReserved = await Order.findOne({
    course: course.id,
    status: {
      $in: [
        OrderEventStatus.AwaitOrderOrPending,
        OrderEventStatus.Completed,
        OrderEventStatus.Created,
      ],
    },
  });

  if (isReserved) {
    return next(new BadRequestError("Course is already reserved!"));
  }

  const expirationDate = new Date();
  expirationDate.setSeconds(expirationDate.getSeconds() + 15 * 60);

  const order = Order.build({
    userId: req.user!.id,
    course: course,
    expirationDate: expirationDate,
    status: OrderEventStatus.Created,
  });

  res.status(201).send(order);
};

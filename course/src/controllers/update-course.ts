import { NotFoundError } from "@udemy-micro/common";
import { NextFunction, Request, Response } from "express";
import { CourseUpdatedPublisher } from "../events/publisher/course-updated-publisher";

import { Course } from "../models/course-model";
import { natsWrapper } from "../nats-wrapper";

export const updateCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, price } = req.body;

  const course = await Course.findByIdAndUpdate(
    req.params.id,
    { title, price },
    { new: true, runValidators: true }
  );

  if (!course) {
    return next(new NotFoundError("There is no course with id"));
  }

  await new CourseUpdatedPublisher(natsWrapper.client).published({
    createdBy: course.createdBy,
    id: course.id,
    title: course.title,
    price: course.price,
  });

  res.send(course);
};

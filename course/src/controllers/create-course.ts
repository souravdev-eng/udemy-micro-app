import { NextFunction, Request, Response } from "express";
import { CourseCreatedPublisher } from "../events/publisher/course-created-publisher";

import { Course } from "../models/course-model";
import { natsWrapper } from "../nats-wrapper";

export const createCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, price } = req.body;

  const course = Course.build({ title, price, createdBy: req.user!.id });
  await course.save();

  await new CourseCreatedPublisher(natsWrapper.client).published({
    id: course.id,
    title: course.title,
    price: course.price,
    createdBy: course.createdBy,
  });

  res.status(201).send(course);
};

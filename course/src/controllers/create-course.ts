import { NextFunction, Request, Response } from "express";
import { CourseCreatedPublisher } from "../events/publisher/course-created-publisher";

import { Course } from "../models/course-model";
import { natsWrapper } from "../nats-wrapper";

export const createCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const course = Course.build({
    title: req.body.title,
    price: req.body.price,
    createdBy: req.user!.name,
    courseImage: req.body.courseImage,
    description: req.body.description,
    language: req.body.language,
    preRequirement: req.body.preRequirement,
    subDescription: req.body.subDescription,
    whatWillLearn: req.body.whatWillLearn,
  });

  await course.save();

  await new CourseCreatedPublisher(natsWrapper.client).published({
    id: course.id,
    title: course.title,
    price: course.price,
  });

  res.status(201).send(course);
};

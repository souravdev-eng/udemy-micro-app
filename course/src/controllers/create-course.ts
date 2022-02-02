import { NextFunction, Request, Response } from "express";
import { Course } from "../models/course-model";

export const createCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, price } = req.body;

  const course = Course.build({ title, price, createdBy: req.user!.id });

  await course.save();

  res.status(201).send(course);
};

import { NextFunction, Request, Response } from "express";
import { Course } from "../models/course-model";

export const showCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const course = await Course.find({});

  res.send(course);
};

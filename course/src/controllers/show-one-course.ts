import { NotFoundError } from "@udemy-micro/common";
import { NextFunction, Request, Response } from "express";
import { Course } from "../models/course-model";

export const showOneCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return next(new NotFoundError("There is no course with that id!"));
  }
  res.send(course);
};

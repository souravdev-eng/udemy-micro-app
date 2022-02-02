import { NotFoundError } from "@udemy-micro/common";
import { NextFunction, Request, Response } from "express";
import { Course } from "../models/course-model";

export const updateCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, price } = req.body;

  const course = await Course.findByIdAndUpdate(
    req.params.id,
    { title, price },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!course) {
    return next(new NotFoundError("There is no course with id"));
  }

  res.send(course);
};

import express from "express";
import {
  currentUser,
  requestValidation,
  requireAuth,
} from "@udemy-micro/common";
import {
  createCourseValid,
  updateCourseValid,
} from "../validations/validation-schema";

import { updateCourse } from "./../controllers/update-course";
import { createCourse } from "./../controllers/create-course";
import { showCourse } from "../controllers/show-course";
import { showOneCourse } from "../controllers/show-one-course";

const router = express.Router();

router
  .route("/")
  .post(
    currentUser,
    requireAuth,
    createCourseValid,
    requestValidation,
    createCourse
  )
  .get(showCourse);

router
  .route("/:id")
  .get(showOneCourse)
  .put(currentUser, updateCourseValid, requestValidation, updateCourse);

export { router as courseRoute };

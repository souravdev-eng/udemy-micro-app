import { body, check } from "express-validator";

export const createCourseValid = [
  body("title").notEmpty().withMessage("Please enter your course title"),
  body("price")
    .isFloat({ min: 299, max: 50000 })
    .withMessage("Price must be greater than 299 and less than 50000"),
];

export const updateCourseValid = [
  check("title"),
  body("price")
    .isFloat({ min: 299, max: 50000 })
    .withMessage("Price must be greater than 299 and less than 50000"),
];

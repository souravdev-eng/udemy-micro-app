import { body, check } from "express-validator";

export const createCourseValid = [
  body("title").notEmpty().withMessage("Please enter your course title"),

  body("price")
    .isFloat({ min: 299, max: 50000 })
    .withMessage("Price must be greater than 299 and less than 50000"),

  body("courseImage")
    .notEmpty()
    .withMessage("Please provide your course image"),

  body("description")
    .isLength({ min: 100, max: 50000 })
    .withMessage("Course description must be between 100 and 10000 characters"),

  body("ratingAvg")
    .notEmpty()
    .isLength({ min: 1, max: 5 })
    .withMessage("Course rating must be between 1 and 5"),
];

export const updateCourseValid = [
  check("title"),
  body("price")
    .isFloat({ min: 299, max: 50000 })
    .withMessage("Price must be greater than 299 and less than 50000"),
];

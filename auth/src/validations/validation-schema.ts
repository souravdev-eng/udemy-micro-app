import { body } from "express-validator";

export const signupValidation = [
  body("name").notEmpty().withMessage("Please provide your Name"),
  body("email").isEmail().withMessage("Please provide your Email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  body("passwordConform").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password");
    }

    // Indicates the success of this synchronous custom validator
    return true;
  }),
];

export const signInValidation = [
  body("email").notEmpty().withMessage("Please provide your Email"),
  body("password").notEmpty().withMessage("Please provide your Password"),
];

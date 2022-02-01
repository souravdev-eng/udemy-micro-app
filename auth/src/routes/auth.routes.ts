import express from "express";
import { currentUser, requestValidation } from "@udemy-micro/common";

import { currentuser } from "../controllers/current-user";
import { signIn } from "../controllers/signin";
import { signUp } from "../controllers/signup";

import {
  signInValidation,
  signupValidation,
} from "../validations/validation-schema";

const router = express.Router();

router.get("/currentuser", currentUser, currentuser);
router.post("/signup", signupValidation, requestValidation, signUp);
router.post("/signin", signInValidation, requestValidation, signIn);

export { router as authRouter };

import express from "express";
import { currentuser } from "../controllers/current-user";
import { signIn } from "../controllers/signin";
import { signUp } from "../controllers/signup";
import { currentUser } from "../middleware/current-user";
import { requestValidation } from "../middleware/request-validation";
import { signupValidation } from "../validations/validation-schema";

const router = express.Router();

router.get("/currentuser", currentUser, currentuser);
router.post("/signup", signupValidation, requestValidation, signUp);
router.post("/signin", requestValidation, signIn);

export { router as authRouter };

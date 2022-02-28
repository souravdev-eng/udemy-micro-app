import { Router } from "express";
import { currentUser } from "@udemy-micro/common";
import { createPayment } from "../controllers/create-payments";

const router = Router();

router.route("/").post(currentUser, createPayment);

export { router as paymentRouter };

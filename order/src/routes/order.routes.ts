import express from "express";
import { currentUser } from "@udemy-micro/common";
import { createOrder } from "../controllers/order-create";
import { showOrders } from "../controllers/show-orders";

const router = express.Router();

router.route("/").get(showOrders).post(currentUser, createOrder);

export { router as orderRoute };

import express from "express";
import { createOrder } from "../controllers/order-create";
import { showOrders } from "../controllers/show-orders";

const router = express.Router();

router.route("/").get(showOrders).post(createOrder);

export { router as orderRoute };

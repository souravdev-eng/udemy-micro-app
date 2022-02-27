import mongoose from "mongoose";
import { BadRequestError } from "@udemy-micro/common";

import { natsWrapper } from "./nats-wrapper";
import { app } from "./app";
import { OrderCreatedListener } from "./events/listener/order-created-listener";
import { OrderCancelledListener } from "./events/listener/order-cancelled-listner";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  if (!process.env.MONGO_URI) {
    throw new BadRequestError("MONGO URI must be define");
  }

  if (!process.env.NATS_URL) {
    throw new BadRequestError("NATS_URL must be define");
  }

  if (!process.env.NATS_CLUSTER_ID) {
    throw new BadRequestError("NATS CLUSTER ID must be define");
  }

  if (!process.env.NATS_CLIENT_ID) {
    throw new BadRequestError("NATS CLIENT ID must be define");
  }

  try {
    await natsWrapper.connect(
      process.env.NATS_CLUSTER_ID,
      process.env.NATS_CLIENT_ID,
      process.env.NATS_URL
    );

    natsWrapper.client.on("close", () => {
      console.log("NATS connection closed...");
      process.exit();
    });

    process.on("SIGINT", () => natsWrapper.client.close());
    process.on("SIGTERM", () => natsWrapper.client.close());

    new OrderCreatedListener(natsWrapper.client).listen();
    new OrderCancelledListener(natsWrapper.client).listen();

    await mongoose.connect(process.env.MONGO_URI!, {
      user: process.env.USER_NAME,
      pass: process.env.DB_PASSWORD,
    });

    console.log("DB is connecting successfully...");
  } catch (error) {
    console.log(error);
  }

  app.listen(3000, () => {
    console.log("Order service listening on port 3000....");
  });
};

start();

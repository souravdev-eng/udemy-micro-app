import { BadRequestError } from "@udemy-micro/common";
import { OrderCreatedListener } from "./events/listener/order-created-listener";

import { natsWrapper } from "./nats-wrapper";

const start = async () => {
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
  } catch (error) {
    console.log(error);
  }
};

start();

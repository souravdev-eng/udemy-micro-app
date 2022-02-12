import { BadRequestError } from "@udemy-micro/common";
import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  if (!process.env.MONGO_URI) {
    throw new BadRequestError("MONGO URI must be define");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("DB is connecting successfully...");
  } catch (error) {
    console.log(error);
  }

  app.listen(3000, () => {
    console.log("Order service listening on port 3000...");
  });
};

start();

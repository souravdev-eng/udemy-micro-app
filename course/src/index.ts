import { BadRequestError } from "@udemy-micro/common";
import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  try {
    if (!process.env.JWT_KEY) {
      throw new Error("JWT_KEY must be defined");
    }

    if (!process.env.MONGO_URI) {
      throw new BadRequestError("MONGO URI must be define");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB is connecting successfully...");
  } catch (error) {
    console.log(error);
  }

  app.listen(3000, () => {
    console.log("Course service listening on port 3000...");
  });
};

start();

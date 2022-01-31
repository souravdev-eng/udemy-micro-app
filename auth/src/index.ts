import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("DB connected successfully....");
  } catch (err: any) {
    console.log(err.message);
  }

  app.listen(3000, () => {
    console.log("App is running on PORT 3000");
  });
};

start();

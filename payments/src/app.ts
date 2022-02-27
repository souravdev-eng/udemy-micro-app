import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { errorHandler, NotFoundError } from "@udemy-micro/common";

const app = express();

app.set("trust proxy", true);
app.use(express.json());

// app.use("/api/order", orderRoute);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  return next(
    new NotFoundError(`${req.originalUrl} not found into the server!`)
  );
});

app.use(errorHandler);

export { app };
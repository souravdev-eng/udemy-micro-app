import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import morgan from "morgan";
import { NotFoundError, errorHandler } from "@udemy-micro/common";

import { authRouter } from "./routes/auth.routes";

const app = express();

app.use(express.json());

if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
}

app.use("/api/users", authRouter);

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  throw new NotFoundError(`${req.originalUrl} is not find to this server!`);
});

app.use(errorHandler);

export { app };

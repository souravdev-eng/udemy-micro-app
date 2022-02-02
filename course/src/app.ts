import express, { NextFunction, Request, Response } from "express";
import { errorHandler, NotFoundError } from "@udemy-micro/common";
import { courseRoute } from "./routes/course.routes";

const app = express();

app.use(express.json());

app.use("/api/course", courseRoute);

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  throw new NotFoundError(`${req.originalUrl} is not find to this server!`);
});

app.use(errorHandler);

export { app };

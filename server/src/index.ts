import express, { Express, Request, Response } from "express";

import { config } from "dotenv";
import db from "./db/models";
import router from "./routes";
import cors from "cors";
import errorHandler from "./middleware/error.handler";

config();

const app: Express = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(errorHandler);

app.use(router);

db.sequelize.sync();

const PORT = 7070;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript");
});

app.listen(PORT, () => {
  console.log("Server is running on the port " + PORT);
});

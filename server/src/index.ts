import express, { Express, Request, Response } from "express";

import { config } from "dotenv";
import db from "./db/models";

config();

const app: Express = express();
app.use(express.json());

const PORT = 7070;

db.sequelize.sync();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript");
});

app.listen(PORT, () => {
  console.log("Server is running on the port " + PORT);
});

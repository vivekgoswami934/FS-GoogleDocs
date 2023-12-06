import express, { Express, Request, Response } from "express";

import { config } from "dotenv";

config();

const app: Express = express();

const PORT = 7070;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript");
});

app.listen(PORT, () => {
  console.log("Server is running on the port " + PORT);
});

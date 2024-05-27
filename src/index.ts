//Packages
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import config from "config";
import cookieParser from "cookie-parser";

//Utils
import connectDB from "./utils/db";
import swaggerDocs from "./utils/swagger";
import logger from "../logging/logger";

dotenv.config();
//const port = config.get<number>("port");
const port = Number(process.env.PORT )|| 4000

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

  app.get("/ping", (_req: Request, res: Response) => {
    return res.send("pong 🏓");
  });

//Routes

app.listen(port, async () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  logger.info("Hello from  Server running on " + port);

  //routes(app);
  await connectDB();
  swaggerDocs(app, port);
});

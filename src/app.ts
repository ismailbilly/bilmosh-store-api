//Packages
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import config from "config";
import cookieParser from "cookie-parser";



dotenv.config();
//const port = config.get<number>("port");
const port = Number(process.env.PORT) || 4000;

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/ping", (_req: Request, res: Response) => {
  return res.send("pong 🏓");
});

//Routes

export default app;

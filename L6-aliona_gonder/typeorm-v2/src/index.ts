import express, { Request, Response } from "express";
import { AppDataSource } from "./data-source.ts";
import studentRouter from "./routes/student.route.ts";

AppDataSource.initialize()
  .then(() => {
    console.log("connection has established...");
  })
  .catch((err) => {
    console.log("there's an error with connection. Fix it!");
  });

const app = express();
app.use(express.json());
app.use("/students", studentRouter);

app.get("/hello", (req: Request, res: Response) => {
  res.end("Here I am....");
});

app.listen(4000, () => {
  console.log("server is up....");
});

import express from "express";
import todoRouter from "./routes/todo.route.js";
import dotenv from 'dotenv'

dotenv.config()
const app = express();
app.use(express.json());
app.use('/todo', todoRouter)


app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT}-de server is up....`);
});

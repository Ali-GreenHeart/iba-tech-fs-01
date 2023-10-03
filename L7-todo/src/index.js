import express from "express";
import todoRouter from "./routes/todo.route.js";

const app = express();
app.use(express.json());
app.use('/todo', todoRouter)


app.listen(4000, () => {
  console.log("server is up....");
});

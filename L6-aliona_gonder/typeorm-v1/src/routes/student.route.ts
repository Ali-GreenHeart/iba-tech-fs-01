import { Router } from "express";
import { AppDataSource } from "../data-source.ts";
import { Student } from "../entity/student.entity.ts";

const studentRouter = Router();

studentRouter.get("/", async (req, res) => {
  const students = await AppDataSource.getRepository(Student).find();
  res.setHeader("content-type", "application/json").json(students);
});
studentRouter.get("/:id", async (req, res) => {
  const student = await AppDataSource.getRepository(Student).findOneBy({
    id: +req.params.id,
  });
  res.setHeader("content-type", "application/json").json(student);
});

studentRouter.post("/", async (req, res) => {
  const newStudent = await AppDataSource.getRepository(Student).create(
    req.body
  );
  const result = await AppDataSource.getRepository(Student).save(newStudent);
  console.log("new user created -- ", result);
  res.status(200).json("New user has been created!");
});

studentRouter.put("/:id", async (req, res) => {
  const updatedStudent = await AppDataSource.getRepository(Student).findOneBy({
    id: +req.params.id,
  });
  AppDataSource.getRepository(Student).merge(updatedStudent, req.body);
  const result = await AppDataSource.getRepository(Student).save(
    updatedStudent
  );
  res.setHeader("content-type", "application/json").status(200).json(result);
});
studentRouter.delete("/:id", async (req, res) => {
  const results = await AppDataSource.getRepository(Student).delete(
    req.params.id
  );
  return res
    .setHeader("content-type", "application/json")
    .status(200)
    .send(results);
});

export default studentRouter;

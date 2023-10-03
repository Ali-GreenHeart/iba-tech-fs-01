import { Router } from "express";
import studentService from "../services/student.service.ts";

const studentRouter = Router();

studentRouter.get("/", async (req, res) => {
  const students = await studentService.getStudents();
  res.setHeader("content-type", "application/json").json(students);
});
studentRouter.get("/:id", async (req, res) => {
  const student = await studentService.getStudentById(+req.params.id);
  res.setHeader("content-type", "application/json").json(student);
});

studentRouter.post("/", async (req, res) => {
  const result = await studentService.createNewStudent(req.body);
  res.status(200).json({ msg: "New user has been created!", result });
});

studentRouter.put("/:id", async (req, res) => {
  const result = await studentService.editStudentById(+req.params.id, req.body);
  res.setHeader("content-type", "application/json").status(200).json(result);
});
studentRouter.delete("/:id", async (req, res) => {
  const result = await studentService.deleteStudent(+req.params.id);
  return res
    .setHeader("content-type", "application/json")
    .status(200)
    .send(result);
});

export default studentRouter;

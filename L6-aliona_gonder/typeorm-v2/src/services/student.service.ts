// import { Student } from "../entity/student.entity";

import { AppDataSource } from "../data-source.ts";
import { CreateStudentDto, EditStudentDto } from "../dto/student.dto.ts";
import { Student } from "../entity/student.entity.ts";

// interface Props {
//   getStudents: () => Student[];
//   getStudentById: (id:number) => Student;
// }
// const studentService: Props = {
//   getStudents: () => { return [] as Student[]; },
//   getStudentById: function (id: number): Student {
//     throw new Error("Function not implemented.");
//   }
// };

const getStudents = async () => {
  const students = await AppDataSource.getRepository(Student).find();
  return students;
};
const getStudentById = async (id: number) => {
  const student = await AppDataSource.getRepository(Student).findOneBy({ id });
  return student;
};
const createNewStudent = async (body: CreateStudentDto) => {
  const newStudent = await AppDataSource.getRepository(Student).create(body);
  const result = await AppDataSource.getRepository(Student).save(newStudent);
  console.log("new user created -- ", result);
  return result;
};

const editStudentById = async (id: number, body: EditStudentDto) => {
  const updatedStudent = await AppDataSource.getRepository(Student).findOneBy({
    id,
  });
  AppDataSource.getRepository(Student).merge(updatedStudent, body);
  const result = await AppDataSource.getRepository(Student).save(
    updatedStudent
  );
  return result;
};

const deleteStudent = async (id: number) => {
  const results = await AppDataSource.getRepository(Student).delete(id);
  return results;
};

export default {
  getStudents,
  getStudentById,
  createNewStudent,
  editStudentById,
  deleteStudent,
};

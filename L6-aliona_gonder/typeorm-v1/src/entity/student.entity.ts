import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// attribute (decorator)
@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  student_name: string;

  @Column()
  student_surname: string;
}

import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "iba-tech",
  synchronize: true,
  logging: true,
  entities: ["src/entity/*.ts"], //[Student], // ["src/entity/*.ts"]
  subscribers: [],
  migrations: [],
});

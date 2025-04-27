import "reflect-metadata";
import { DataSource } from "typeorm";
import Entities from "@/domain/entities";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "user",
  password: "admin",
  database: "timmio_db",
  entities: Entities,
  synchronize: true,
  logging: false,
});

export default AppDataSource;

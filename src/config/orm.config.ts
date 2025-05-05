import { TypeOrmModuleOptions } from "@nestjs/typeorm";

import Entities from "../domain/entities";

import { CreateRoleAndUserTables1745854366762 } from "@/migrations/1745854336230-CreateRoleAndUserTables";
import { SeedRoleTable1746456301100 } from "@/migrations/1746456301100-SeedRoleTable";

const OrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "user", // TODO Use .env pls
  password: "admin",
  database: "timmio_db",
  entities: Entities,
  synchronize: false,
  logging: false,
  migrations: [
    CreateRoleAndUserTables1745854366762,
    SeedRoleTable1746456301100,
  ],
};

export default OrmConfig;

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AuthModule } from "@/app/auth";

import OrmConfig from "./config/orm.config";

@Module({
  imports: [TypeOrmModule.forRoot(OrmConfig), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

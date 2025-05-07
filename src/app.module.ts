import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

import { AuthModule } from "@/api/v1/auth";

import OrmConfig from "./config/orm.config";

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
  ],
})
export class AppModule {}

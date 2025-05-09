import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

import OrmConfig from "@/config/orm.config";
import { AuthModule } from "@/api/v1/auth";
import { UserModule } from "@/api/v1/user";

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    ConfigModule.forRoot({ isGlobal: true }),
    // AuthModule,
    UserModule,
  ],
})
export class AppModule {}

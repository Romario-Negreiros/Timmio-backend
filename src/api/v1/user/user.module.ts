import { Module } from "@nestjs/common";
import { DataSource } from "typeorm";

import { User } from "@/domain/entities";
import { UserController, UserService, UserRepository } from ".";

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UserRepository,
      useFactory: (dataSource: DataSource) => {
        return dataSource.getRepository(User).extend(UserRepository.prototype);
      },
      inject: [DataSource],
    },
  ],
  exports: [UserService],
})
export class UserModule {}

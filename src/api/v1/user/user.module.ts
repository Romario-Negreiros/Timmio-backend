import { Module } from "@nestjs/common";

import { User } from "@/domain/entities";
import { UserService } from "./user.service";
import { UserRepository } from "./user.repository";
import { DataSource } from "typeorm";

@Module({
  imports: [],
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
})
export class UserModule {}

import { Injectable } from "@nestjs/common";

import { User } from "@/domain/entities";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  async create(): Promise<User | null> {
    return await this.userRepo.findByEmail("oi");
  }
}

import { Repository } from "typeorm";

import { User } from "@/domain/entities";

export class UserRepository extends Repository<User> {
  async findByEmail(email: string) {
    return await this.findOneBy({ email });
  }
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./user.entity";

@Entity()
class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 8,
  })
  name: string; // User | Admin | Employee

  @Column({
    length: 1,
  })
  shortahnd: string; // U - User | A - Admin | E - Employee

  @OneToMany(() => User, (user) => user)
  user: User;
}

export default Role;

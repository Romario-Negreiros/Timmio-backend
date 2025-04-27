import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 8,
  })
  name: string; // User | Admin | Employee
}

export default Role;

import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedRoleTable1746456301100 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "role" (name, shorthand) VALUES ('Admin', 'A')`,
    );
    await queryRunner.query(
      `INSERT INTO "role" (name, shorthand) VALUES ('Employee', 'E')`,
    );
    await queryRunner.query(
      `INSERT INTO "role" (name, shorthand) VALUES ('User', 'U')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "role"`);
  }
}

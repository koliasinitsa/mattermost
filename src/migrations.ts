import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1631252096892 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
          CREATE TABLE books (
            id serial PRIMARY KEY,
            title varchar(100) NOT NULL,
            author varchar(100) NOT NULL
          );
        `);
      }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      -- Ваши SQL-запросы для отката миграции (удаления таблицы и т.д.)
    `);
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration1631252096892 = void 0;
class InitialMigration1631252096892 {
    async up(queryRunner) {
        await queryRunner.query(`
          CREATE TABLE books (
            id serial PRIMARY KEY,
            title varchar(100) NOT NULL,
            author varchar(100) NOT NULL
          );
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
      -- Ваши SQL-запросы для отката миграции (удаления таблицы и т.д.)
    `);
    }
}
exports.InitialMigration1631252096892 = InitialMigration1631252096892;

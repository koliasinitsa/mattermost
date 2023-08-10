import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Декоратор, указывающий, что это сущность базы данных
export class Book {
  static create(bookData: any) {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn() // Автоматически генерируемый первичный ключ
  id: number = 0;

  @Column({ length: 100 }) // Колонка с названием книги
  title: string = '';

  @Column({ length: 100 }) // Колонка с автором книги
  author: string = '';
}

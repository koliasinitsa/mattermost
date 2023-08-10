import { getRepository } from 'typeorm';
import { Book } from '../models/Book';

export class BookService {
  private bookRepository = getRepository(Book);

  async getAllBooks(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async createNewBook(title: string, author: string): Promise<Book> {
    const newBook = this.bookRepository.create({
      title,
      author,
    });

    return await this.bookRepository.save(newBook);
  }
}

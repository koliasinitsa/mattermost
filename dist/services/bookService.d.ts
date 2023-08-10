import { Book } from '../models/Book';
export declare class BookService {
    private bookRepository;
    getAllBooks(): Promise<Book[]>;
    createNewBook(title: string, author: string): Promise<Book>;
}

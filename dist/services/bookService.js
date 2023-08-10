"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const typeorm_1 = require("typeorm");
const Book_1 = require("../models/Book");
class BookService {
    constructor() {
        this.bookRepository = (0, typeorm_1.getRepository)(Book_1.Book);
    }
    async getAllBooks() {
        return await this.bookRepository.find();
    }
    async createNewBook(title, author) {
        const newBook = this.bookRepository.create({
            title,
            author,
        });
        return await this.bookRepository.save(newBook);
    }
}
exports.BookService = BookService;

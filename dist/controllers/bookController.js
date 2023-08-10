"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBook = exports.getBooks = void 0;
const typeorm_1 = require("typeorm");
const Book_1 = require("../models/Book");
const bookQueue_1 = require("../queues/bookQueue");
// Получение списка книг
const getBooks = async (_req, res) => {
    try {
        const bookRepository = (0, typeorm_1.getRepository)(Book_1.Book); // Получаем репозиторий для работы с моделью Book
        const books = await bookRepository.find(); // Получаем список книг из базы данных
        res.json(books); // Отправляем список книг в виде JSON
    }
    catch (error) {
        res.status(500).json({ error: 'Ошибка сервера' });
    }
};
exports.getBooks = getBooks;
// Создание новой книги
const createBook = async (req, res) => {
    try {
        const { title, author } = req.body; // Извлекаем данные о книге из тела запроса
        const bookRepository = (0, typeorm_1.getRepository)(Book_1.Book); // Получаем репозиторий для работы с моделью Book
        const newBook = bookRepository.create({
            title,
            author,
        }); // Создаем новую книгу
        await bookRepository.save(newBook); // Сохраняем новую книгу в базе данных
        // Добавление задачи в очередь на создание книги
        await bookQueue_1.bookQueue.add('createBook', {
            bookId: newBook.id,
        });
        res.json({ message: 'Задача добавлена в очередь' });
    }
    catch (error) {
        res.status(500).json({ error: 'Ошибка сервера' });
    }
};
exports.createBook = createBook;

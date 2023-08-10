import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Book } from '../models/Book';
import { bookQueue } from '../queues/bookQueue';

// Получение списка книг
export const getBooks = async (_req: Request, res: Response) => {
  try {
    const bookRepository = getRepository(Book); // Получаем репозиторий для работы с моделью Book
    const books = await bookRepository.find(); // Получаем список книг из базы данных
    res.json(books); // Отправляем список книг в виде JSON
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};
// Создание новой книги
export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, author } = req.body; // Извлекаем данные о книге из тела запроса

    const bookRepository = getRepository(Book); // Получаем репозиторий для работы с моделью Book

    const newBook = bookRepository.create({
      title,
      author,
    }); // Создаем новую книгу

    await bookRepository.save(newBook); // Сохраняем новую книгу в базе данных

    // Добавление задачи в очередь на создание книги
    await bookQueue.add('createBook', {
      bookId: newBook.id,
    });

    res.json({ message: 'Задача добавлена в очередь' });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};

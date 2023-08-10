import { Worker } from 'bullmq';
import { Book } from '../models/Book';

const worker = new Worker('bookQueue', async job => {
  if (job.name === 'createBook') {
    try {
      // Ваша обработка задачи
      const bookData = job.data;

      // Пример: сохранение данных в базе данных
      const newBook = await Book.create(bookData);

      console.log('Задача успешно обработана:', bookData);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Ошибка обработки задачи:', error.message);
      } else {
        console.error('Неизвестная ошибка обработки задачи:', error);
      }
    }
  }
}, {
  connection: {
    host: '127.0.0.1', // Адрес Redis сервера
    port: 6379,        // Порт Redis сервера
  },
});

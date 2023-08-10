import express from 'express';
import { getBooks, createBook } from '../controllers/bookController'; // Импортируем контроллеры

const router = express.Router();

// Маршрут для получения списка книг (GET /)
router.get('/books', getBooks);

// Маршрут для создания новой книги (POST /)
router.post('/books', createBook);

export default router;

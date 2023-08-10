import express from 'express';
import { createConnection } from 'typeorm';
import apiRoutes from './routes/api'; // Импортируем маршруты API

const app = express();
const port = 3000;

// Подключение к базе данных с помощью TypeORM
createConnection().then(() => {
  console.log('Подключено к базе данных');
}).catch(error => {
  console.error('Ошибка подключения к базе данных:', error);
});

app.use(express.json());

// Используем маршруты API
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

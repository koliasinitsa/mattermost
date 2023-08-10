import { Queue } from 'bullmq';

export const bookQueue = new Queue('bookQueue', {
  connection: {
    host: '127.0.0.1', // Адрес Redis сервера
    port: 6379,        // Порт Redis сервера
  },
});
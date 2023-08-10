"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookQueue = void 0;
const bullmq_1 = require("bullmq");
exports.bookQueue = new bullmq_1.Queue('bookQueue', {
    connection: {
        host: '127.0.0.1',
        port: 6379, // Порт Redis сервера
    },
});

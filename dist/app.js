"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const api_1 = __importDefault(require("./routes/api")); // Импортируем маршруты API
const app = (0, express_1.default)();
const port = 3000;
// Подключение к базе данных с помощью TypeORM
(0, typeorm_1.createConnection)().then(() => {
    console.log('Подключено к базе данных');
}).catch(error => {
    console.error('Ошибка подключения к базе данных:', error);
});
app.use(express_1.default.json());
// Используем маршруты API
app.use('/api', api_1.default);
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

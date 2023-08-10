"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controllers/bookController"); // Импортируем контроллеры
const router = express_1.default.Router();
// Маршрут для получения списка книг (GET /)
router.get('/books', bookController_1.getBooks);
// Маршрут для создания новой книги (POST /)
router.post('/books', bookController_1.createBook);
exports.default = router;

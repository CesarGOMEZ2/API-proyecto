"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPool = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
function createPool() {
    return promise_1.default.createConnection({
        host: "35.168.86.77",
        user: "apirest",
        password: "password",
        port: 3306,
        database: "Prueba",
    });
}
exports.createPool = createPool;
;

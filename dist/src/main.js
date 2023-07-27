"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const Register_router_1 = require("./register/infrastructure/Register-router");
function boostrap() {
    const app = (0, express_1.default)();
    app.use(body_parser_1.default.json());
    app.use("/register", Register_router_1.RegisterRouter);
    const { port } = config_1.config.server;
    app.listen(port, () => {
        console.log(`[APP] - Starting application on port ${port}`);
    });
}
boostrap();

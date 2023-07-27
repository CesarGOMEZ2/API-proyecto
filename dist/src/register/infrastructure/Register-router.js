"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
//import { PostRegisterController } from "./dependencies";
const RegisterRouter = express_1.default.Router();
exports.RegisterRouter = RegisterRouter;
RegisterRouter.post("/Proyecto", dependencies_1.RegisterController.getAllRegister.bind(dependencies_1.RegisterController));

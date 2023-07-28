"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryRegisterRepository = void 0;
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const socket = (0, socket_io_client_1.default)("http://54.175.153.141:4000");
//import { createPool } from "../../mysql";
const Register_1 = require("../domain/Register");
class InMemoryRegisterRepository {
    getAll(datos) {
        return __awaiter(this, void 0, void 0, function* () {
            //let datos = JSON.parse(prueba)
            socket.emit('message', datos);
            console.log("informacion del invernadero", datos);
            return new Register_1.Register(datos);
        });
    }
}
exports.InMemoryRegisterRepository = InMemoryRegisterRepository;

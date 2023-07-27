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
const socket = (0, socket_io_client_1.default)("http://localhost:4008");
//import { createPool } from "../../mysql";
const Register_1 = require("../domain/Register");
class InMemoryRegisterRepository {
    getAll(distancia) {
        return __awaiter(this, void 0, void 0, function* () {
            //socket.on('connection',() =>{
            let prueba = distancia;
            //let datos = JSON.parse(prueba)
            socket.emit('message', prueba);
            console.log("nivel de agua", distancia);
            return new Register_1.Register(distancia);
        });
    }
}
exports.InMemoryRegisterRepository = InMemoryRegisterRepository;

"use strict";
//import io from "socket.io-client";
//const socket = io("http://localhost:4008");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryRegisterRepository = void 0;
//import { createPool } from "../../mysql";
const Register_1 = require("../domain/Register");
class InMemoryRegisterRepository {
    getAll(temperatura, humedad) {
        return __awaiter(this, void 0, void 0, function* () {
            //socket.on('connection',() =>{
            //let datos = JSON.parse(prueba)
            //socket.emit('message',prueba);
            console.log("nivel de agua", temperatura + " espacio " + humedad);
            return new Register_1.Register(temperatura, humedad);
        });
    }
}
exports.InMemoryRegisterRepository = InMemoryRegisterRepository;

//import io from "socket.io-client";
//const socket = io("http://localhost:4008");




//import { createPool } from "../../mysql";
import { Register } from "../domain/Register";
import { RegisterRepository } from "../domain/Register-repository";

export class InMemoryRegisterRepository implements RegisterRepository {
  async getAll(temperatura: string, humedad:string): Promise<Register> {
    
    //socket.on('connection',() =>{
    //let datos = JSON.parse(prueba)
    //socket.emit('message',prueba);
    
    console.log("nivel de agua", temperatura + " espacio " + humedad);
    return new Register(temperatura, humedad);
  }
}

import { Register } from "./Register";

export interface RegisterRepository {
  getAll(temperatura: string, humedad:string): Promise<Register>;
}

import { Register } from "./Register";

export interface CreateRegister {
  addRegister(
    temperatura: string,
    humedad: string
   
  ): Promise<Register | null>;
}

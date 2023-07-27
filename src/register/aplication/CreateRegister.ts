import { CreateRegister } from "../domain/CreateRegister";

export class PostRegister {
  constructor(private readonly addRegister: CreateRegister) {}

  async createRegister(
    temperatura: string,
    humedad: string,
   
  ) {
    try {
      const Register = await this.addRegister.addRegister(
        temperatura,
        humedad,
      );
      if (!Register) {
        throw new Error(`Register ${temperatura} no se agregado`);
      }
      return Register;
    } catch (error) {
      throw error;
    }
  }
}

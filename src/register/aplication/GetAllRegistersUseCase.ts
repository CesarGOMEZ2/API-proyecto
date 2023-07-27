import { Register } from "../domain/Register";
import { RegisterRepository } from "../domain/Register-repository";

export class GetAllRegister {
  constructor(private readonly RegisterRepository: RegisterRepository) {}
  async execute(temperatura: string, humedad:string): Promise<Register> {
    const music = await this.RegisterRepository.getAll(temperatura,humedad);
    return music;
  }
}

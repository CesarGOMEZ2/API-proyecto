import { Request, Response } from "express";

import { GetAllRegister } from "../aplication/GetAllRegistersUseCase";

export class registerController {
  constructor(private readonly getAllRegistersUseCase: GetAllRegister) {}

  async getAllRegister(req: Request, res: Response ) {
    try {
      let temperatura = req.body.temperatura;
      let humedad = req.body.humedad;
      const Register = await this.getAllRegistersUseCase.execute(temperatura, humedad);
      res.status(200).send(Register);
    } catch (error) {
      res.status(500).json({ error: "Failed to get Register" });
    }
  }
}

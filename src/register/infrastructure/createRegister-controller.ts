import { Request, Response } from "express";

import { PostRegister } from "../aplication/CreateRegister";

export class CreateRegisterController {
  constructor(private readonly postRegister: PostRegister) { }

  async createRegister(req: Request, res: Response) {
    //const id = req.body.id;
    const temperatura = req.body.temperatura;
    const humedad = req.body.humedad;


    const resultado = await this.postRegister.createRegister(
      temperatura,
      humedad

    );
    console.log("controller", resultado.temperatura);
    res
      .status(200)
      .send(
        `La solicitud ${resultado.temperatura} fue éxitoso`
      );
  }
}

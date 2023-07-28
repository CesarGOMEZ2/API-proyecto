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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRegisterController = void 0;
class CreateRegisterController {
    constructor(postRegister) {
        this.postRegister = postRegister;
    }
    createRegister(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const id = req.body.id;
            const temperatura = req.body.temperatura;
            const humedad = req.body.humedad;
            const resultado = yield this.postRegister.createRegister(temperatura, humedad);
            console.log("controller", resultado);
            res
                .status(200)
                .send(`La solicitud ${resultado} fue éxitoso`);
        });
    }
}
exports.CreateRegisterController = CreateRegisterController;

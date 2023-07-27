"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = exports.getAllRegistersUseCase = void 0;
//import { PostRegister } from "../aplication/CreateRegister";
const GetAllRegistersUseCase_1 = require("../aplication/GetAllRegistersUseCase");
//import { CreateRegisterController } from "./createRegister-controller";
const createRegisterrepository_1 = require("./createRegisterrepository");
const Register_controller_1 = require("./Register-controller");
//import { AddRegisterRepository } from "./Register-repository";
const registerRepository = new createRegisterrepository_1.InMemoryRegisterRepository();
const getAllRegistersUseCase = new GetAllRegistersUseCase_1.GetAllRegister(registerRepository);
exports.getAllRegistersUseCase = getAllRegistersUseCase;
const RegisterController = new Register_controller_1.registerController(getAllRegistersUseCase);
exports.RegisterController = RegisterController;
//const RegisterRepositori = new AddRegisterRepository();
//const createRegister = new PostRegister(RegisterRepositori);
//const PostRegisterController = new CreateRegisterController(createRegister);
//export { createRegister, PostRegisterController };
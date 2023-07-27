//import { PostRegister } from "../aplication/CreateRegister";
import { GetAllRegister } from "../aplication/GetAllRegistersUseCase";
//import { CreateRegisterController } from "./createRegister-controller";
import { InMemoryRegisterRepository } from "./createRegisterrepository";
import { registerController } from "./Register-controller";
//import { AddRegisterRepository } from "./Register-repository";

const registerRepository = new InMemoryRegisterRepository();
const getAllRegistersUseCase = new GetAllRegister(registerRepository);
const RegisterController = new registerController(getAllRegistersUseCase); 

export { getAllRegistersUseCase, RegisterController };

//const RegisterRepositori = new AddRegisterRepository();
//const createRegister = new PostRegister(RegisterRepositori);
//const PostRegisterController = new CreateRegisterController(createRegister);

//export { createRegister, PostRegisterController };
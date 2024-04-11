import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../modules/users/useCases/createUser/getAllUsers/GetAllUsersController";
import { AuthController } from "../controller/AuthController";
import { AuthMiddlwares } from "../middlewares/auth";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const authController = new AuthController();

const userRoutes = Router();

<<<<<<< HEAD
userRoutes.post("/create", createUserController.handle);
userRoutes.get("/", AuthMiddlwares, getAllUsersController.handle);
userRoutes.post("/authenticate", authController.authenticate);
=======
userRoutes.post("/", createUserController.handle); // Essa rota
userRoutes.post("/", authController.authenticate); // E essa vao conflitar
userRoutes.get("/", AuthMiddlwares, getAllUsersController.handle);
>>>>>>> b5d912785816b08febc8addbe5f8c49c23391980

export { userRoutes };
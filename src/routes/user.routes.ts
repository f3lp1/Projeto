import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../modules/users/useCases/createUser/getAllUsers/GetAllUsersController";
import { AuthController } from "../controller/AuthController";
import { AuthMiddlwares } from "../middlewares/auth";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const authController = new AuthController();

const userRoutes = Router();

userRoutes.post("/create", createUserController.handle);
userRoutes.get("/getall", AuthMiddlwares, getAllUsersController.handle);
userRoutes.post("/authenticate", authController.authenticate);

export { userRoutes };
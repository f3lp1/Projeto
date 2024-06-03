import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { GetAllUsersController } from "../controllers/GetAllUsersController";
import { AuthMiddlwares } from "../middlewares/auth";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();

const userRoutes = Router();

userRoutes.post("/create", createUserController.handle);
userRoutes.get("/users", AuthMiddlwares, getAllUsersController.handle);

export { userRoutes };
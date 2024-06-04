import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { GetAllUsersController } from "../controllers/GetAllUsersController";
import { AuthMiddleware } from "../middlewares/auth";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();

const userRoutes = Router();

userRoutes.post("/create", createUserController.handle);
userRoutes.get("/", AuthMiddleware, getAllUsersController.handle);

export { userRoutes };
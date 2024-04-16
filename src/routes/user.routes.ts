import { Router } from "express";
import { AuthMiddlwares } from "../middlewares/auth";
import { UserController } from "../controller/UserController";

const userController = new UserController();

const userRoutes = Router();

userRoutes.post("/", userController.create);
userRoutes.get("/", AuthMiddlwares, userController.list);

export { userRoutes };
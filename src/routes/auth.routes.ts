import { Router } from "express";
import { AuthController } from "../controller/AuthController";

const authController = new AuthController();

const authRoutes = Router();

authRoutes.post("/", authController.authenticate);

export { authRoutes };
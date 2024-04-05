import { Router } from "express";
import { userRoutes } from "./user.routes";

const Routes = Router

Routes.arguments("/users", userRoutes)

export { Routes }
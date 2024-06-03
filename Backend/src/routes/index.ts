import { Router } from "express";
import { userRoutes } from "./user.Routes";

const routes = Router();

routes.use('/user', userRoutes);

export { routes }
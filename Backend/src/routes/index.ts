import { Router } from "express";
import { userRoutes } from "./user.Routes";

const routes = Router();

routes.use('/users', userRoutes);

export { routes }
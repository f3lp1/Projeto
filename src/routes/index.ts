import { Router } from "express";
import { userRoutes } from "./user.routes";

// Problema era aq, n e saudavel acessar os arguments de uma funcao, mas a funcionalidade ja existe atraves do sistema de middleware do express
const routes = Router();

routes.use('/users', userRoutes);

export { routes }
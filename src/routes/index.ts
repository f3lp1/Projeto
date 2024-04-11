import { Router } from "express";
import { userRoutes } from "./user.routes";

<<<<<<< HEAD
=======
// Problema era aq, n e saudavel acessar os arguments de uma funcao, mas a funcionalidade ja existe atraves do sistema de middleware do express
>>>>>>> b5d912785816b08febc8addbe5f8c49c23391980
const routes = Router();

routes.use('/users', userRoutes);

export { routes }
import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
<<<<<<< HEAD
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const createUserUseCase = new CreateUserUseCase();

        const result = await createUserUseCase.execute({ name, email, password });

        return res.status(201).json(result);
    }
=======
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({ name, email, password });

    // 201 n retorna nada
    return res.status(201).json(result);
  }
>>>>>>> b5d912785816b08febc8addbe5f8c49c23391980
}

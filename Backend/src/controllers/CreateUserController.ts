import { Request, Response } from 'express';
import { CreateUserUseCase } from '../modules/users/useCases/createUser/createUserUseCase';
import { AppError } from '../errors/AppError';

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createUserUseCase = new CreateUserUseCase();

    try {
      const result = await createUserUseCase.execute({ name, email, password });
      return res.status(201).json(result);
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

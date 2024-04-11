import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./GetAllUsersUseCases";

export class GetAllUsersController {
<<<<<<< HEAD
    async handle(req: Request, res: Response) {
        const getAllUsersUseCase = new GetAllUsersUseCase();

        const result = await getAllUsersUseCase.excute();

        return res.status(200).json(result);
    }
}
=======
  async handle(req: Request, res: Response) {
    const getAllUsersUseCase = new GetAllUsersUseCase();

    const result = await getAllUsersUseCase.excute();

    // Aq tem q retornar satus code 200
    return res.status(201).json(result);
  }
}
>>>>>>> b5d912785816b08febc8addbe5f8c49c23391980

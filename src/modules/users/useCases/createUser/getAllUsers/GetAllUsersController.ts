import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./GetAllUsersUseCases";

export class GetAllUsersController {
  async handle(req: Request, res: Response) {
    const getAllUsersUseCase = new GetAllUsersUseCase();

    const result = await getAllUsersUseCase.excute();

    // Aq tem q retornar satus code 200
    return res.status(201).json(result);
  }
}

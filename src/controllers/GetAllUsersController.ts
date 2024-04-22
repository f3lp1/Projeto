import { Request, Response } from "express";
import { GetAllUsersUseCase } from "../modules/users/useCases/createUser/getAllUsers/GetAllUsersUseCases";

export class GetAllUsersController {
    async handle(req: Request, res: Response) {
        const getAllUsersUseCase = new GetAllUsersUseCase();

        const result = await getAllUsersUseCase.execute();


        return res.status(200).json(result);
    }
}

import { Request, Response } from "express"
import { CreateUserUseCase } from "./createUserUseCase"

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body
        const createUserUseCase = new CreateUserUseCase()

        const result = await createUserUseCase.execute({ name, email, password })

        return res.status(201).json(result)
    }
}

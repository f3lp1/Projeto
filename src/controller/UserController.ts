import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { prisma } from "../prisma/client";
import { sign } from "jsonwebtoken";
import { AppError } from "../errors/AppError";

const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export class UserController {
  async list(_: Request, res: Response) {
    const users = await prisma.user.findMany({});
    return res.status(200).json(users);
  }

  async create(req: Request, res: Response) {
    const validationResult = CreateUserSchema.safeParse(req.body);

    if (!validationResult.success) {
      throw new AppError("Invalid user data");
    }

    // Criar o usuário
    const hash_password =  SHA256(password).toString();
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hash_password,
      },
    });

    return res.status(201).json(user);
  }
}


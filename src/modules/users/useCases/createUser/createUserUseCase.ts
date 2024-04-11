import { z } from "zod";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/createUserDTO";
import { SHA256 } from "crypto-js";
import { User } from "@prisma/client";

const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export class CreateUserUseCase {
  async execute({ name, email, password }: CreateUserDTO): Promise<User> {
    // Validar os dados de entrada
    const validationResult = CreateUserSchema.safeParse({ name, email, password });

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

    return user;
  }
}

import { User } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/createUserDTO";
import { hash } from "bcrypt";

export class CreateUserUseCase {
  async execute({ name, email, password }: CreateUserDTO): Promise<User> {
    // Verificar se o usuário já existe
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    // Criar o usuário
    const hash_password = await hash(password, 8)
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hash_password
      },
    });

    return user;
  }
}

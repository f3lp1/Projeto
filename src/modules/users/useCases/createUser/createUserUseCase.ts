import { User } from "@prisma/client";
// Pra evitar esses "../../" eternos, tu pode fazer um alias na configuracao do ts, ai por exemplo pra chamar o prisma tu faz sla ' from "$prisma";'
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/createUserDTO";
import { hash } from "bcrypt";

export class CreateUserUseCase {
  async execute({ name, email, password }: CreateUserDTO): Promise<User> {
    // Aqui seria interessante adicionar uma validacao de formato, pode usar o zod pra isso
    
    // Como existe um parametro @unique no prisma, isso n precisa, a funcao de create vai disparar um erro ao criar
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

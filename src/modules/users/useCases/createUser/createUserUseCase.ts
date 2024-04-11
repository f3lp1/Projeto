<<<<<<< HEAD
import { z } from "zod";
=======
import { User } from "@prisma/client";
// Pra evitar esses "../../" eternos, tu pode fazer um alias na configuracao do ts, ai por exemplo pra chamar o prisma tu faz sla ' from "$prisma";'
>>>>>>> b5d912785816b08febc8addbe5f8c49c23391980
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
<<<<<<< HEAD
    // Validar os dados de entrada
    const validationResult = CreateUserSchema.safeParse({ name, email, password });
=======
    // Aqui seria interessante adicionar uma validacao de formato, pode usar o zod pra isso
    
    // Como existe um parametro @unique no prisma, isso n precisa, a funcao de create vai disparar um erro ao criar
    // Verificar se o usuário já existe
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });
>>>>>>> b5d912785816b08febc8addbe5f8c49c23391980

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

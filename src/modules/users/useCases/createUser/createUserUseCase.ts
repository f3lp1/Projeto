import { User } from "@prisma/client";
import { CreateUserDTO } from "../../dtos/createUserDTO";
import { prisma } from "../../../../prisma/client";

export class CreateUserUseCase {
    async execute({ name, email }: CreateUserDTO): Promise<User>{
        //Verificar se o usuario ja existe
const userAlredyExists = await prisma.user.findUnique({
    where: {
        email
    }
})
if (userAlredyExists) {
    //erro
    }
        //criar o usuario
        const user = await prisma.user.create({
    data: {
              name,
                email
            }
        })
        return user
    }
 }

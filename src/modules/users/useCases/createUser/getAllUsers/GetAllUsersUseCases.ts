import { User } from "@prisma/client";
import { prisma } from "../../../../../prisma/client";

export class GetAllUsersUseCase {
<<<<<<< HEAD
    async excute(): Promise<User[]> {
        const users = await prisma.user.findMany({});

        return users;
    }
}
=======
  async excute(): Promise<User[]> {
    const users = await prisma.user.findMany({});

    return users;
  }
}
>>>>>>> b5d912785816b08febc8addbe5f8c49c23391980

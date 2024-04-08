import { User } from "@prisma/client";
import { prisma } from "../../../../../prisma/client";

export class GetAllUsersUseCase {
    async excute(): Promise<User[]> {
        const users = await prisma.user.findMany({})

        return users
    }
}
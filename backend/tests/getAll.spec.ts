
//import { Request, Response } from "express";
//import { GetAllUsersUseCase } from "../modules/users/useCases/createUser/getAllUsers/GetAllUsersUseCases";

//export class GetAllUsersController {
//    async handle(req: Request, res: Response) {
//        const getAllUsersUseCase = new GetAllUsersUseCase();

//        const result = await getAllUsersUseCase.execute();

//       return res.status(200).json(result);
//    }
//}

import { GetAllUsersUseCase } from "../src/modules/users/useCases/createUser/getAllUsers/GetAllUsersUseCases";
import { prisma } from "../src/prisma/client";

jest.mock("../src/prisma/client", () => ({
  prisma: {
    user: {
      findMany: jest.fn(),
    },
  },
}));

describe("GetAllUsersUseCase", () => {
  it("should return all users", async () => {
    const users = [
      { id: 1, name: "User 1", email: "user1@example.com" },
      { id: 2, name: "User 2", email: "user2@example.com" },
    ];

    (prisma.user.findMany as jest.Mock).mockResolvedValue(users);

    const getAllUsersUseCase = new GetAllUsersUseCase();
    const result = await getAllUsersUseCase.execute();

    expect(result).toEqual(users);
  });
});







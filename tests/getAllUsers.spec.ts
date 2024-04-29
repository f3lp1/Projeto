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
  afterEach(() => {
    jest.clearAllMocks(); 
  });

  it("should return all users", async () => {
    const mockUsers = [
      { id: 1, name: "User 1" },
      { id: 2, name: "User 2" },
    ];

    (prisma.user.findMany as jest.Mock).mockResolvedValue(mockUsers);

    const getAllUsersUseCase = new GetAllUsersUseCase();

    const result = await getAllUsersUseCase.execute();

    expect(prisma.user.findMany).toHaveBeenCalledWith({});

    expect(result).toEqual(mockUsers);
  });
});

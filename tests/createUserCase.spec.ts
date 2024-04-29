import { CreateUserUseCase } from "../src/modules/users/useCases/createUser/createUserUseCase";
import { prisma } from "../src/prisma/client";
import { User } from "@prisma/client";

jest.mock("../src/prisma/client", () => {
  return {
    prisma: {
      user: {
        create: jest.fn(),
      }
    }
  };
});

describe("create user test", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a user with valid data", async () => {
    const createUserDTO = {
      name: "test",
      email: "test@gmail.com",
      password: "12345",
    };

    const expectedUser: User = {
      id: 1,
      name: "test",
      email: "test@gmail.com",
      password: "hashedPassword",
    };

    (prisma.user.create as jest.Mock).mockResolvedValue(expectedUser);

    const createUserUseCase = new CreateUserUseCase();
    const result = await createUserUseCase.execute(createUserDTO);

    expect(prisma.user.create).toHaveBeenCalledWith({
      data: {
        name: "test",
        email: "test@gmail.com",
        password: expect.any(String),
      },
    });

    expect(result).toEqual(expectedUser);
  });
});

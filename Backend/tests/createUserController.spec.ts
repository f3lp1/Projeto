import { Request, Response } from "express";
import { CreateUserController } from "../src/controllers/CreateUserController";
import { CreateUserUseCase } from "../src/modules/users/useCases/createUser/createUserUseCase";

jest.mock("../src/modules/users/useCases/createUser/createUserUseCase", () => {
  return {
    CreateUserUseCase: jest.fn().mockImplementation(() => ({
      execute: jest.fn().mockResolvedValue({ id: "01", name: "test", email: "test@example.com" })
    }))
  };
});

describe("CreateUserController", () => {
  it("should create a new user", async () => {
    
    const mockRequest = {
      body: {
        name: "test",
        email: "test@example.com",
        password: "12345"
      }
    } as unknown as Request;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response;

    const createUserController = new CreateUserController();
    await createUserController.handle(mockRequest, mockResponse);

    expect(CreateUserUseCase).toHaveBeenCalledWith();

    expect(mockResponse.status).toHaveBeenCalledWith(201);

    expect(mockResponse.json).toHaveBeenCalledWith({ id: "01", name: "test", email: "test@example.com" });
  });
});

import { AuthController } from '../src/controllers/AuthController';
import { prisma } from '../src/prisma/client';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { Request, Response } from 'express';

jest.mock('../src/prisma/client', () => ({
  prisma: {
    user: {
      findUnique: jest.fn(),
    },
  },
}));

jest.mock('bcryptjs', () => ({
  compare: jest.fn(),
}));

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(),
}));

describe('AuthController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should authenticate user and return token', async () => {
    const req: Partial<Request> = {
      body: {
        email: 'test@example.com',
        password: 'password123',
      },
    };

    const mockUser = {
      id: 1,
      email: 'test@example.com',
      password: 'hashedPassword',
    };

    (compare as jest.Mock).mockResolvedValue(true);

    (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);

    (sign as jest.Mock).mockReturnValue('mockedToken');

    const authController = new AuthController();

    const res: Partial<Response> = {
      json: jest.fn(),
    };

    await authController.authenticate(req as Request, res as Response);

    expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { email: req.body.email } });

    expect(compare).toHaveBeenCalledWith(req.body.password, mockUser.password);

    expect(sign).toHaveBeenCalledWith({ id: mockUser.id }, 'secret', { expiresIn: '1d' });

    expect(res.json).toHaveBeenCalledWith({ user: { id: mockUser.id, email: mockUser.email }, token: 'mockedToken' });
  });
});

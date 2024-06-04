import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { prisma } from "../prisma/client";
import { sign } from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export class AppError {
    public readonly message: string;
    public readonly statusCode: number;

    constructor(message: string, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

export class AuthController {
    static authenticate(arg0: string, authenticate: any) {
        throw new Error("Method not implemented.");
    }
    async authenticate(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            const user = await prisma.user.findUnique({ where: { email } });

            if (!user) {
                throw new AppError("User not found", 401);
            }

            const isValidPassword = await compare(password, user.password);

            if (!isValidPassword) {
                throw new AppError("Invalid password", 401);
            }

            const token = sign({ id: user.id }, process.env.JWT_SECRET || "defaultSecret", { expiresIn: "1d" });

            const { id } = user;

            return res.json({ user: { id, email }, token });
        } catch (error) {
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}

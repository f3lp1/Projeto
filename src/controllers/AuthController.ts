import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { prisma } from "../prisma/client";
import { sign } from "jsonwebtoken";

export class AppError {
    public readonly message: string;
    public readonly statusCode: number;

    constructor(message: string, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

export class AuthController {
    async authenticate(req: Request, res: Response) {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            throw new AppError("User not found", 401);
        }

        const isValuePassword = await compare(password, user.password);

        if (!isValuePassword) {
            throw new AppError("Invalid password", 401);
        }

        const token = sign({ id: user.id }, "secret", { expiresIn: "1d" });

        const { id } = user;

        return res.json({ user: { id, email }, token });
    }
}

import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { prisma } from "../prisma/client";
import { sign } from "jsonwebtoken";

export class AuthController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      // Isso aq tem q retornar status code 401
      return res.json({ error: "User not found" });
    }
    // Boa
    const isValuePassword = await compare(password, user.password);

    if (!isValuePassword) {
      // Isso aq tem q retornar status code 401
      return res.json({ error: "password invalid" });
    }

    // expiresIn tem q ser um periodo em ms
    const token = sign({ id: user.id }, "secret", { expiresIn: "id" });

    const { id } = user;

    return res.json({ user: { id, email }, token });
  }
}

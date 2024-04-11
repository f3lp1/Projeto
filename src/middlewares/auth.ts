import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

type TokenPayload = {
<<<<<<< HEAD
    id: string;
    iat: number;
    exp: number;
};
export function AuthMiddlwares(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "Token not provided" });
    }
    const [, token] = authorization.split(" ");

    try {
        const decoded = verify(token, "secret");
        const { id } = decoded as TokenPayload;

        req.userId = id;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }



}
=======
  id: string;
  iat: number;
  exp: number;
};
export function AuthMiddlwares(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;

  if (!authorization) {
    // Boa
    return res.status(401).json({ error: "Token not provided" });
  }

  // Fazer um split pelo 'Bearer ' e mais seguro, mas assim  funfa
  const [, token] = authorization.split(" ");

  try {
    const decoded = verify(token, "secret");
    const { id } = decoded as TokenPayload;

    req.userId = id;
    next();
  } catch (error) {
    // Invalid token no lugar de token invalid
    return res.status(401).json({ error: "Tokwn invalid" });
  }
}
>>>>>>> b5d912785816b08febc8addbe5f8c49c23391980

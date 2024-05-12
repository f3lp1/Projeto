import { AuthMiddlwares } from '../src/middlewares/auth';
import { sign } from "jsonwebtoken";

// const { authorization } = req.headers;

// if (!authorization) {
//     return res.status(401).json({ error: "Token not provided" });
// }
// const [, token] = authorization.split(" ");

// try {
//     const decoded = verify(token, "secret");
//     const { id } = decoded as TokenPayload;

//     req.userId = id;
//     next();
// } catch (error) {
//     return res.status(401).json({ error: "Invalid token" });
// }

describe('Test validity of code', () => {
  let req: Request & { userId?: string }, next: jest.Mock;

  beforeEach(() => {
    next = jest.fn();
    req = {
      headers: {
        authorization: `Bearer ${sign({ id: 'diferente' }, 'secret')}`
      } 
    } as any as Request;
  });

  describe('Success', () => {
    beforeEach(() => {
      AuthMiddlwares(req as any, {} as any, next);
    });

    it('next is called', () => {
      expect(next).toHaveBeenCalledTimes(1);
    });

    it('req has userId', () => {
      expect(req.userId).toEqual('diferente');
    });
  })
});
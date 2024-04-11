import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./errors/AppError";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);
<<<<<<< HEAD

app.get('/', (req, res) => {
  res.send('Server iniciado')
})
=======
>>>>>>> b5d912785816b08febc8addbe5f8c49c23391980

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
<<<<<<< HEAD
  }
=======
  },
>>>>>>> b5d912785816b08febc8addbe5f8c49c23391980
);

app.listen(8000, () => console.log("Server is running in port 8000 "));

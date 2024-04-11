import { z } from "zod";

const schemaPrisma = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});
const result = schemaPrisma.safeParse({
<<<<<<< HEAD
    name: "",
    email: "",
    password: "",
=======
  name: "",
  email: "",
  password: "",
>>>>>>> b5d912785816b08febc8addbe5f8c49c23391980
});

console.log(result);

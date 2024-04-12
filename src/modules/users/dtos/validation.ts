import { z } from "zod";

const schemaPrisma = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});
const result = schemaPrisma.safeParse({
    name: "",
    email: "",
    password: "",
});

console.log(result);

import { z } from "zod";

const pattern = z.string();

//testes
const result = pattern.parse("vitor");
console.log(result)
import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";

export const echoBodySchema = z
  .object({
    input: z.string().trim().min(1, "Required"),
  })
  .required();

export class EchoDto extends createZodDto(echoBodySchema) {}

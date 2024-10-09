import { AnyZodObject, z } from "zod";

export const bookSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(3),
  pages: z.number().positive().min(1),
  category: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
export const createBookBodySchema = bookSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateBookBodySchema = createBookBodySchema.partial();

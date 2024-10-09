import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import {
  isBookIdValid,
  isBookNameValid,
} from "../middlewares/isBookValid.middleware";
import { BodyValidator } from "../middlewares/bodyValidator.middleware";
import {
  createBookBodySchema,
  updateBookBodySchema,
} from "../schemas/books.schema";

export const booksRouter = Router();

const booksControllers = new BooksControllers();
booksRouter.post(
  "/",
  BodyValidator.execute({ body: createBookBodySchema }),
  isBookNameValid.execute,
  booksControllers.createBook
);
booksRouter.get("/", booksControllers.getBooks);
booksRouter.get("/:id", isBookIdValid.execute, booksControllers.getOneBook);
booksRouter.patch(
  "/:id",
  BodyValidator.execute({ body: updateBookBodySchema }),
  isBookIdValid.execute,
  isBookNameValid.execute,
  booksControllers.updateBook
);
booksRouter.delete("/:id", isBookIdValid.execute, booksControllers.deleteBook);

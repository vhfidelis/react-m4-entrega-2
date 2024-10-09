import express, { json } from "express";
import "express-async-errors";
import { booksRouter } from "./router/books.router";
import { handleErrors } from "./errors/handleErrors";
import helmet from "helmet";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/books", booksRouter);

app.use(handleErrors.execute);

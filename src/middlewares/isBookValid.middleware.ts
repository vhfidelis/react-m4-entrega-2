import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/erros";

export class isBookIdValid {
  static execute(req: Request, res: Response, next: NextFunction) {
    const bookFound = booksDatabase.find(
      (book) => book.id === Number(req.params.id)
    );
    if (!bookFound) {
      throw new AppError(404, "Book not found.");
    }
    next();
  }
}

export class isBookNameValid {
  static execute(req: Request, res: Response, next: NextFunction) {
    if (req.params.id) {
      const remainingBooks = booksDatabase.filter(
        (book) => book.id != Number(req.params.id)
      );
      if (remainingBooks.some((book) => book.name === req.body.name)) {
        throw new AppError(409, "Book already registered.");
      }
    } else {
      if (booksDatabase.some((book) => book.name === req.body.name)) {
        throw new AppError(409, "Book already registered.");
      }
    }

    next();
  }
}

import { BooksService } from "../services/books.services";
import { Request, Response } from "express";

export class BooksControllers {
  getBooks(req: Request, res: Response): Response {
    const { search } = req.query;

    const booksService = new BooksService();

    const response = booksService.getBooks(search as string);

    return res.status(200).json(response);
  }
  getOneBook(req: Request, res: Response): Response {
    const booksService = new BooksService();

    const { id } = req.params;

    const response = booksService.getOneBook(Number(id));

    return res.status(200).json(response);
  }
  createBook(req: Request, res: Response): Response {
    const booksService = new BooksService();

    const data = req.body;

    const response = booksService.createBook(data);

    return res.status(201).json(response);
  }
  deleteBook(req: Request, res: Response): Response {
    const booksService = new BooksService();

    const { id } = req.params;

    const response = booksService.deleteBook(Number(id));
    return res.status(204);
  }
  updateBook(req: Request, res: Response): Response {
    const booksService = new BooksService();

    const { id } = req.params;

    const data = req.body;

    const response = booksService.updateBook(Number(id), data);

    return res.status(200).json(response);
  }
}

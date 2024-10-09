import { booksDatabase, generateId } from "../database/database";
import { IBook, TCreateBook, TUpdateBook } from "../interface/interface";

export class BooksService {
  getBooks(search?: string) {
    if (search) {
      const filteredBooks = booksDatabase.filter((book) =>
        book.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
      return filteredBooks;
    }

    return booksDatabase;
  }
  getOneBook(bookId: number) {
    const selectedBook = booksDatabase.find((book) => book.id === bookId);

    return selectedBook;
  }

  createBook(data: TCreateBook) {
    const date = new Date();

    const newBook: IBook = {
      ...data,
      id: generateId(),
      createdAt: date,
      updatedAt: date,
    };

    booksDatabase.push(newBook);

    return newBook;
  }

  deleteBook(id: number) {
    const index = booksDatabase.findIndex((book) => book.id === id);

    booksDatabase.splice(index, 1);
  }
  updateBook(id: number, data: TUpdateBook) {
    const selectedBook = booksDatabase.find((book) => book.id === id);

    if (selectedBook) {
      const date = new Date();

      const index = booksDatabase.findIndex((book) => book.id === id);

      const updatedBook = { ...selectedBook, ...data, updatedAt: date };

      booksDatabase.splice(index, 1, updatedBook);

      return updatedBook;
    }
  }
}

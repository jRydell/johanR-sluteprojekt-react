import BookCard from "../Components/BookCard";
import { Book } from "../types/types";

export const renderBooks = (books: Book[], searchPageButtons: boolean) => {
  if (books.length) {
    return books.map((book) => (
      <li key={book.key}>
        <BookCard book={book} searchPageButtons={searchPageButtons} />
      </li>
    ));
  } else {
    return <p>No Books</p>;
  }
};

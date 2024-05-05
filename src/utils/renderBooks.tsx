import BookCard from "../Components/BookCard";
import { Book } from "../types/types";

export const renderBookList = (books: Book[], searchPageButtons = false) => {
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

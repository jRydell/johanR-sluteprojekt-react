import AuthorCard from "../Components/AuthorCard";
import BookCard from "../Components/BookCard";
import { Author, Book } from "../types/types";

export const renderBooks = (
  books: Book[],
  removeFavoriteButton: boolean,
  removeReadButton: boolean,
  searchPageButtons: boolean,
  reviewButton: boolean
) => {
  if (books.length) {
    return books.map((book) => (
      <li key={book.key}>
        <BookCard
          book={book}
          searchPageButtons={searchPageButtons}
          removeFavoriteButton={removeFavoriteButton}
          removeReadButton={removeReadButton}
          reviewButton={reviewButton}
        />
      </li>
    ));
  } else {
    return <p>No Books Found</p>;
  }
};

export const renderAuthors = (
  authors: Author[],
  removeFavoriteButton: boolean,
  addFavoriteButton: boolean
) => {
  if (authors.length) {
    return authors.map((author) => (
      <li key={author.key}>
        <AuthorCard
          author={author}
          removeFavoriteButton={removeFavoriteButton}
          addFavoriteButton={addFavoriteButton}
        />
      </li>
    ));
  } else {
    return <p>No Authors Found</p>;
  }
};

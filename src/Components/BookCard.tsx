import { Book } from "../types/types";
import { useGlobalState } from "../hooks/useGlobalState";
import noCover from "../assets/noCover.svg";
import SearchPageButtons from "./BookToggleButtons";

type BookCardProps = {
  book: Book;
  deleteFavoriteButton: boolean;
  deleteReadButton: boolean;
  bookToogleButtons?: boolean;
};

const BookCard: React.FC<BookCardProps> = ({
  book,
  bookToogleButtons = true,
  deleteFavoriteButton = true,
  deleteReadButton = true,
}) => {
  const { dispatch } = useGlobalState();

  return (
    <section className="border border-gray-300 rounded p-4">
      {book.cover_i ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt="Book Cover"
          className="h-50 w-full object-cover rounded mb-4"
        />
      ) : (
        <img
          src={noCover}
          alt="No Book Cover Available"
          className="h-50 w-full object-cover rounded mb-4"
        />
      )}
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-500 mb-2">Author: {book.author_name}</p>
      <p className="text-sm text-gray-500">
        First Publish Year: {book.first_publish_year}
      </p>

      {bookToogleButtons && <SearchPageButtons book={book} />}

      {deleteFavoriteButton && (
        <button
          onClick={() =>
            dispatch({ type: "REMOVE_FAVORITE_BOOK", payload: book })
          }
          className=""
        >
          Delete
        </button>
      )}
      {deleteReadButton && (
        <button
          onClick={() => dispatch({ type: "REMOVE_READ_BOOK", payload: book })}
          className=""
        >
          Delete
        </button>
      )}
    </section>
  );
};

export default BookCard;

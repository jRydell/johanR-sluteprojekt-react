import { Book } from "../types/types";
import { useGlobalState } from "../hooks/useGlobalState";
import noCover from "../assets/noCover.svg";
type BookCardProps = {
  book: Book;
  favoriteButton?: boolean;
  deleteButton?: boolean;
};

const BookCard: React.FC<BookCardProps> = ({
  book,
  favoriteButton = true,
  deleteButton = true,
}) => {
  const { dispatch } = useGlobalState();

  return (
    <div className="border border-gray-300 rounded p-4">
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

      {favoriteButton && (
        <button
          onClick={() => dispatch({ type: "ADD_BOOK", payload: book })}
          className="mt-2"
        >
          Add to Favorites
        </button>
      )}
      {deleteButton && (
        <button
          onClick={() => dispatch({ type: "REMOVE_BOOK", payload: book })}
          className="mt-2"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default BookCard;

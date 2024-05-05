import { Book } from "../types/types";
import { useGlobalState } from "../hooks/useGlobalState";
import noCover from "../assets/noCover.svg";
type BookCardProps = {
  book: Book;
  searchPageButtons?: boolean;
  deleteFavoriteButton?: boolean;
  deleteReadButton?: boolean;
};

const BookCard: React.FC<BookCardProps> = ({
  book,
  searchPageButtons = true,
  deleteFavoriteButton = true,
  deleteReadButton = true,
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

      {searchPageButtons && (
        <section>
          <button
            onClick={() =>
              dispatch({ type: "ADD_FAVORITE_BOOK", payload: book })
            }
            className=""
          >
            Add to Favorites
          </button>
          <button
            onClick={() => dispatch({ type: "ADD_READ_BOOK", payload: book })}
            className=""
          >
            Mark as Read
          </button>
        </section>
      )}

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
    </div>
  );
};

export default BookCard;

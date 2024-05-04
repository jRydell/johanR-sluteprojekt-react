import { useContext } from "react";
import { Book } from "../types/types";
import { GlobalStateContext } from "../state/GlobalStateContext";

type BookCardProps = {
  book: Book;
};

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { state, dispatch } = useContext(GlobalStateContext);

  const handleClick = () => {
    dispatch({ type: "ADD_BOOK", payload: book });
    console.log(state.favoriteBooks);
  };

  return (
    <div className="border border-gray-300 rounded p-4">
      {book.cover_i ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt="Book Cover"
          className="h-50 w-full object-cover rounded mb-4"
        />
      ) : (
        <p>No cover available</p>
      )}
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-500 mb-2">Author: {book.author_name}</p>
      <p className="text-sm text-gray-500">
        First Publish Year: {book.first_publish_year}
      </p>

      <button onClick={handleClick} className="mt-2">
        Add to Favorites
      </button>
    </div>
  );
};

export default BookCard;

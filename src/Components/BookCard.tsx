import { Book } from "../types/types";
import { useGlobalState } from "../hooks/useGlobalState";
import noCover from "../assets/noCover.svg";
import { useState } from "react";

type BookCardProps = {
  book: Book;
  searchPageButtons?: boolean;
  deleteFavoriteButton: boolean;
  deleteReadButton: boolean;
};
const BookCard: React.FC<BookCardProps> = ({
  book,
  searchPageButtons = true,
  deleteFavoriteButton = true,
  deleteReadButton = true,
}) => {
  const { dispatch } = useGlobalState();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isRead, setIsRead] = useState(false);
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
      {searchPageButtons && (
        <section className="flex gap-4">
          <button
            onClick={() => {
              dispatch({ type: "TOGGLE_FAVORITE_BOOK", payload: book });
              setIsFavorite(!isFavorite);
            }}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none ${
              isFavorite ? "active:bg-red-500 active:hover:bg-red-700" : ""
            }`}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
          <button
            onClick={() => {
              dispatch({ type: "TOGGLE_READ_BOOK", payload: book });
              setIsRead(!isRead);
            }}
            className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none ${
              isRead ? "active:bg-yellow-500 active:hover:bg-yellow-700" : ""
            }`}
          >
            {isRead ? "Mark as Unread" : "Mark as Read"}
          </button>
        </section>
      )}
      <div className="flex justify-center">
        {deleteFavoriteButton && (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FAVORITE_BOOK", payload: book })
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none active:bg-red-500 active:hover:bg-red-700 "
          >
            Delete
          </button>
        )}
        {deleteReadButton && (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_READ_BOOK", payload: book })
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none active:bg-red-500 active:hover:bg-red-700"
          >
            Delete
          </button>
        )}
      </div>
    </section>
  );
};

export default BookCard;

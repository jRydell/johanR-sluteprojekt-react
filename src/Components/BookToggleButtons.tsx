import { useState } from "react";
import { useGlobalState } from "../hooks/useGlobalState";
import { Book } from "../types/types";

const BookToggleButtons = ({ book }: { book: Book }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isRead, setIsRead] = useState(false);
  const { dispatch } = useGlobalState();
  return (
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
  );
};

export default BookToggleButtons;

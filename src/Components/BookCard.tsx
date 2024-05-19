import { BookCardProps } from "../types/types";
import { useGlobalState } from "../hooks/useGlobalState";
import noCover from "../assets/noCover.svg";
import { useState } from "react";
import ReviewForm from "./ReviewForm";
const BookCard = ({ book, addButtons }: BookCardProps) => {
const BookCard = ({ book, addButtons }: BookCardProps) => {
  const { dispatch } = useGlobalState();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isRead, setIsRead] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="">
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
      <p className="text-sm text-gray-500">Author: {book.author_name}</p>
      <p className="text-sm text-gray-500 mb-2">
        First Publish Year: {book.first_publish_year}
      </p>
      {book.review && (
        <p className="text-sm text-gray-500">Review: {book.review}</p>
      )}
      {book.rating && (
        <p className="text-sm text-gray-500">Rating: {book.rating}</p>
      )}
      {book.numPages && (
        <p className="text-sm text-gray-500 mb-3">
          Number of pages: {book.numPages}
        </p>
      )}

      {addButtons && (
        <div className="flex gap-4">
          <button
            onClick={() => {
              dispatch({ type: "ADD_FAVORITE_BOOK", payload: book });
              setIsFavorite(true);
            }}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none ${
              isFavorite ? "active:bg-red-500 active:hover:bg-red-700" : ""
            }`}
          >
            {isFavorite ? "Added to Favorites" : "Add to Favorites"}
          </button>

          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none ${
              isRead ? "active:bg-red-500 active:hover:bg-red-700" : ""
            }`}
          >
            {isRead ? "Added to read books" : "Add to read books"}
          </button>
        </div>
      )}
      {isOpen && (
        <ReviewForm
          book={book}
          isRead={isRead}
          setIsRead={setIsRead}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </section>
  );
};

export default BookCard;

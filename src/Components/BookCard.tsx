import { Book } from "../types/types";

type BookCardProps = {
  book: Book;
};

const BookCard: React.FC<BookCardProps> = ({ book }) => {
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
    </div>
  );
};

export default BookCard;

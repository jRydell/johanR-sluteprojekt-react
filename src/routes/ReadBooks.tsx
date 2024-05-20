import BookCard from "../components/BookCard";
import Button from "../components/Button";
import { useGlobalState } from "../hooks/useGlobalState";
import { Book } from "../types/types";

const ReadBooks = () => {
  const { state, dispatch } = useGlobalState();

  return (
    <section>
      <h2>Read Books:</h2>
      {state.readBooks.length ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {state.readBooks.map((book: Book) => (
            <li
              className="border border-gray-300 rounded p-4 bg-gray-50 shadow-lg"
              key={book.key}
            >
              <BookCard book={book} addButtons={false} />
              <div className="flex justify-center">
                <Button
                  handleClick={() =>
                    dispatch({
                      type: "REMOVE_READ_BOOK",
                      payload: book.key,
                    })
                  }
                >
                  Remove
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite books yet.</p>
      )}
    </section>
  );
};

export default ReadBooks;

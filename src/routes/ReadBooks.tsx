import BookCard from "../components/BookCard";
import { useGlobalState } from "../hooks/useGlobalState";
import { Book } from "../types/types";

const ReadBooks = () => {
  const { state } = useGlobalState();

  return (
    <>
      <section className="">
        <h2 className="">Read Books:</h2>
        {state.readBooks.length ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {state.readBooks.map((book: Book) => (
              <li key={book.key}>
                <BookCard
                  book={book}
                  searchPageButtons={false}
                  removeFavoriteButton={false}
                  removeReadButton={true}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No favorite books yet.</p>
        )}
      </section>
    </>
  );
};

export default ReadBooks;

import BookCard from "../components/BookCard";
import { useGlobalState } from "../hooks/useGlobalState";
import { Book } from "../types/types";

const FavoriteBooks = () => {
  const { state } = useGlobalState();
  console.log(state.favoriteBooks);
  return (
    <>
      <section className="">
        <h2 className="">Favorite Books:</h2>
        {state.favoriteBooks.length ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {state.favoriteBooks.map((book: Book) => (
              <li key={book.key}>
                <BookCard
                  book={book}
                  searchPageButtons={false}
                  removeFavoriteButton={true}
                  removeReadButton={false}
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

export default FavoriteBooks;

import BookCard from "../Components/BookCard";
import { useGlobalState } from "../hooks/useGlobalState";
import { Outlet } from "react-router-dom";

const FavoriteBooks = () => {
  const { state } = useGlobalState();

  return (
    <>
      <section>
        <h2 className="text-xl font-semibold mb-4">Favorite Books</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {state.favoriteBooks.length ? (
            state.favoriteBooks.map((book) => (
              <li key={book.key}>
                <BookCard book={book} favoriteButton={false} />
              </li>
            ))
          ) : (
            <p>No Favorites</p>
          )}
        </ul>
      </section>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default FavoriteBooks;

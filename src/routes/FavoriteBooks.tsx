import { useGlobalState } from "../hooks/useGlobalState";
import { NavLink, Outlet } from "react-router-dom";

const FavoriteBooks = () => {
  const { state } = useGlobalState();

  return (
    <>
      <section>
        <h2>Favorite Books</h2>
        <ul>
          {state.favoriteBooks.length ? (
            state.favoriteBooks.map((book) => (
              <li key={book.key}>
                <NavLink to={`/book/${book.key}`}>{book.title}</NavLink>
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

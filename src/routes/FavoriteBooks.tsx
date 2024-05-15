import BookCard from "../components/BookCard";
import Button from "../components/Button";
import { useGlobalState } from "../hooks/useGlobalState";
import { Book } from "../types/types";

const FavoriteBooks = () => {
  const { state, dispatch } = useGlobalState();

  return (
    <>
      <section>
        <h2>Favorite Books:</h2>
        {state.favoriteBooks.length ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {state.favoriteBooks.map((book: Book) => (
              <li className="" key={book.key}>
                <BookCard book={book} addButtons={false} />
                <div className="flex justify-center">
                  <Button
                    handleClick={() =>
                      dispatch({
                        type: "REMOVE_FAVORITE_BOOK",
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
    </>
  );
};

export default FavoriteBooks;

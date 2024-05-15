import AuthorCard from "../components/AuthorCard";
import Button from "../components/Button";
import { useGlobalState } from "../hooks/useGlobalState";
import { Author } from "../types/types";

const FavoriteAuthors = () => {
  const { state, dispatch } = useGlobalState();

  return (
    <>
      <section className="">
        <h2 className="">Favorite Authors:</h2>
        {state.favoriteAuthors.length ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {state.favoriteAuthors.map((author: Author) => (
              <li
                className="border border-gray-300 rounded p-4"
                key={author.key}
              >
                <AuthorCard author={author} addButton={false} />
                <Button
                  handleClick={() =>
                    dispatch({
                      type: "REMOVE_FAVORITE_AUTHOR",
                      payload: author.key,
                    })
                  }
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No favorite authors yet.</p>
        )}
      </section>
    </>
  );
};

export default FavoriteAuthors;

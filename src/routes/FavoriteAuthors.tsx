import AuthorCard from "../components/AuthorCard";
import { useGlobalState } from "../hooks/useGlobalState";
import { Author } from "../types/types";

const FavoriteAuthors = () => {
  const { state } = useGlobalState();

  return (
    <>
      <section className="">
        <h2 className="">Favorite Authors:</h2>
        {state.favoriteAuthors.length ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {state.favoriteAuthors.map((author: Author) => (
              <li key={author.key}>
                <AuthorCard
                  author={author}
                  removeFavoriteButton={false}
                  addFavoriteButton={true}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No favorite authors found.</p>
        )}
        ;
      </section>
    </>
  );
};

export default FavoriteAuthors;

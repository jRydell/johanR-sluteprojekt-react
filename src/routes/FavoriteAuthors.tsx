import AuthorCard from "../Components/AuthorCard";
import { useGlobalState } from "../hooks/useGlobalState";
import { Author } from "../types/types";

const FavoriteAuthors = () => {
  const { state } = useGlobalState();

  return (
    <>
      <section className="">
        <h2 className="">Favorite Authors:</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {state.favoriteAuthors &&
            state.favoriteAuthors.map((author: Author) => (
              <AuthorCard key={author.key} author={author} />
            ))}
        </ul>
      </section>
    </>
  );
};

export default FavoriteAuthors;

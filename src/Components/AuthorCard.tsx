import { Author } from "../types/types";
import { useGlobalState } from "../hooks/useGlobalState";

type AuthorCardProps = {
  author: Author;
  addFavoriteButton?: boolean;
  removeFavoriteButton?: boolean;
};

const AuthorCard = ({
  author,
  addFavoriteButton = true,
  removeFavoriteButton = true,
}: AuthorCardProps) => {
  const { dispatch } = useGlobalState();

  return (
    <>
      <section>
        <h3 className="text-lg font-semibold">{author.author_name}</h3>
        <p className="text-sm text-gray-500 mb-2">Subject: {author.subject}</p>
        {addFavoriteButton && (
          <button
            onClick={() => dispatch({ type: "ADD_AUTHOR", payload: author })}
          >
            Add to favorites
          </button>
        )}
        {removeFavoriteButton && (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_AUTHOR", payload: author.key })
            }
          >
            Remove
          </button>
        )}
      </section>
    </>
  );
};

export default AuthorCard;

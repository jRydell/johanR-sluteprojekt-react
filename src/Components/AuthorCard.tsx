import { Author } from "../types/types";
import { useGlobalState } from "../hooks/useGlobalState";

type AuthorCardProps = {
  author: Author;
  addFavoriteButton: boolean;
  removeFavoriteButton: boolean;
};

const AuthorCard = ({
  author,
  addFavoriteButton,
  removeFavoriteButton,
}: AuthorCardProps) => {
  const { dispatch } = useGlobalState();

  return (
    <>
      <section>
        <img
          src={`https://covers.openlibrary.org/a/olid/${author.key}-M.jpg`}
          alt="Author Photo"
          className="h-50 w-full object-cover rounded mb-4"
        />

        <h3 className="text-lg font-semibold">{author.name}</h3>
        <p className="text-sm text-gray-500 mb-2">
          Date of birth: {author.birth_date}
        </p>

        <p className="text-sm text-gray-500 mb-2">
          Top work: {author.top_work}
        </p>
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

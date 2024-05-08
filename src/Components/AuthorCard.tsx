import { Author } from "../types/types";
import { useGlobalState } from "../hooks/useGlobalState";
import { useState } from "react";

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
  const [isFavorite, setIsFavorite] = useState(false);

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
            onClick={() => {
              dispatch({ type: "ADD_AUTHOR", payload: author });
              setIsFavorite(true);
            }}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none ${
              isFavorite ? "active:bg-red-500 active:hover:bg-red-700" : ""
            }`}
          >
            {isFavorite ? "Added to Favorites" : "Add to Favorites"}
          </button>
        )}

        {removeFavoriteButton && (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_AUTHOR", payload: author.key })
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none active:bg-red-500 active:hover:bg-red-700"
          >
            Remove
          </button>
        )}
      </section>
    </>
  );
};

export default AuthorCard;

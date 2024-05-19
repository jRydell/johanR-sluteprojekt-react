import { AuthorCardProps } from "../../types/types";
import { useGlobalState } from "../useGlobalState";
import { useState } from "react";

const AuthorCard = ({ author, addButton }: AuthorCardProps) => {
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

        <h3 className="text-lg font-semibold mb-2">{author.name}</h3>
        <p className="text-sm text-gray-500 ">
          Date of birth: {author.birth_date}
        </p>

        <p className="text-sm text-gray-500 mb-2">
          Top work: {author.top_work}
        </p>
        {addButton && (
          <button
            onClick={() => {
              dispatch({ type: "ADD_FAVORITE_AUTHOR", payload: author });
              setIsFavorite(true);
            }}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none ${
              isFavorite ? "active:bg-red-500 active:hover:bg-red-700" : ""
            }`}
          >
            {isFavorite ? "Added to Favorites" : "Add to Favorites"}
          </button>
        )}
      </section>
    </>
  );
};

export default AuthorCard;

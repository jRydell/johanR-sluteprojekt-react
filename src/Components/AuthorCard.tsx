import { Author } from "../types/types";
import { useGlobalState } from "../hooks/useGlobalState";

type AuthorCardProps = {
  author: Author;
};

const AuthorCard = ({ author }: AuthorCardProps) => {
  const { dispatch } = useGlobalState();

  return (
    <>
      <section>
        <h3 className="text-lg font-semibold">{author.author_name}</h3>
        <p className="text-sm text-gray-500 mb-2">Subject: {author.subject}</p>
        <button
          onClick={() => dispatch({ type: "ADD_AUTHOR", payload: author })}
        >
          Add to favorites
        </button>
      </section>
    </>
  );
};

export default AuthorCard;

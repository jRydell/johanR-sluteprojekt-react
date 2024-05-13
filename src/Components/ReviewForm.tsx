import { useFormInput } from "../hooks/useFormInput";
import { useGlobalState } from "../hooks/useGlobalState";
import { Book } from "../types/types";

type ReadBookProps = {
  book: Book;
};

const ReadBookForm = ({
  book: { key, title, first_publish_year, author_name, cover_i },
}: ReadBookProps) => {
  const { dispatch } = useGlobalState();

  const userRating = useFormInput("");
  const userReview = useFormInput("");
  const userNumPages = useFormInput("");

  const handleSubmitRead = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "ADD_READ_BOOK",
      payload: {
        key: key,
        title: title,
        first_publish_year: first_publish_year,
        author_name: author_name,
        cover_i: cover_i,
        rating: userRating.value,
        review: userReview.value,
        numPages: userNumPages.value,
      },
    });
    userRating.reset();
    userReview.reset();
    userNumPages.reset();
  };
  return (
    <>
      <article className="w-fit">
        <form className="flex flex-col" onSubmit={handleSubmitRead}>
          <>
            <label htmlFor="userReview">Review:</label>
            <textarea {...userReview} id="userReview" autoFocus />
          </>
          <>
            <label htmlFor="userRating ">Rating:</label>
            <input type="number" {...userRating} id="userRating" />
          </>
          <>
            <label htmlFor="userNumPages">Number of pages:</label>
            <input type="number" {...userNumPages} id="userNumPages" />
          </>
          <button
            className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none active:bg-red-500 active:hover:bg-red-700"
            type="submit"
          >
            Submit
          </button>
        </form>
      </article>
    </>
  );
};

export default ReadBookForm;

import { useFormInput } from "../hooks/useFormInput";
import { useGlobalState } from "../hooks/useGlobalState";
import { ReadBookProps } from "../types/types";

const ReadBookForm = ({
  book: { key, title, first_publish_year, author_name, cover_i },
  isRead,
  setIsRead,
  isOpen,
  setIsOpen,
}: ReadBookProps) => {
  const { dispatch } = useGlobalState();

  const rating = useFormInput("");
  const review = useFormInput("");
  const numPages = useFormInput("");

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "ADD_READ_BOOK",
      payload: {
        key: key,
        title: title,
        first_publish_year: first_publish_year,
        author_name: author_name,
        cover_i: cover_i,
        rating: rating.value,
        review: review.value,
        numPages: numPages.value,
      },
    });
    setIsRead(!isRead);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <article className="w-fit">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <>
            <label htmlFor="review">Review:</label>
            <textarea {...review} id="review" autoFocus />
          </>
          <>
            <label htmlFor="rating ">Rating:</label>
            <input type="number" {...rating} id="rating" />
          </>
          <>
            <label htmlFor="numPages">Number of pages:</label>
            <input type="number" {...numPages} id="numPages" />
          </>
          <button
            className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none active:bg-red-500 active:hover:bg-red-700"
            type="submit"
          >
            Add
          </button>
        </form>
      </article>
    </>
  );
};

export default ReadBookForm;

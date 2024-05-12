import { useFormInput } from "../hooks/useFormInput";
import { useGlobalState } from "../hooks/useGlobalState";

type ReadBookProps = {
  key: string;
  title: string;
  author_name: string[];
  cover_i: string;
  first_publish_year: number;
};

const ReadBookForm = ({
  key,
  title,
  author_name,
  cover_i,
  first_publish_year,
}: ReadBookProps) => {
  const { dispatch } = useGlobalState();

  const userRating = useFormInput("");
  const userReview = useFormInput("");
  const userNumPages = useFormInput("");

  const handleSubmitRead = (e: any) => {
    e.preventDefault();
    dispatch({
      type: "ADD_READ_BOOK",
      payload: {
        key: key,
        title: title,
        first_publish_year: first_publish_year,
        author_name: author_name,
        cover_i: cover_i,
        userRating: userRating.value,
        userReview: userReview.value,
        userNumPages: userNumPages.value,
      },
    });
  };
  return (
    <>
      <article className=" w-fit">
        <h2>Add a Review</h2>

        <form className="flex flex-col" onSubmit={handleSubmitRead}>
          <>
            <label htmlFor="userReview">Review:</label>
            <textarea {...userReview} id="userReview" />
          </>
          <>
            <label htmlFor="userRating ">Rating:</label>
            <input type="number" {...userRating} id="userRating" />
          </>
          <>
            <label htmlFor="userNumPages">Number of pages:</label>
            <input type="number" {...userNumPages} id="userNumPages" />
          </>
          <button type="submit">Submit</button>
        </form>
      </article>
    </>
  );
};

export default ReadBookForm;

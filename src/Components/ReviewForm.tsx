import { useFormInput } from "../hooks/useFormInput";
import { useGlobalState } from "../hooks/useGlobalState";
import { Book } from "../types/types";

const ReviewForm = ({}: Book) => {
  const { dispatch } = useGlobalState();

  const userRating = useFormInput("");
  const userReview = useFormInput("");
  const userNumPages = useFormInput("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({});
  };

  return (
    <article className="w-fit">
      <h2>Add a review</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="userRating">Rating</label>
        <input type="number" {...userRating} id="userRating" />

        <label htmlFor="userReview">Your Review</label>
        <input type="text" {...userReview} id="userReview" />

        <label htmlFor="userNumPages">Number of pages</label>
        <input type="text" {...userNumPages} id="userNumPages" />

        <button type="submit">Submit</button>
      </form>
    </article>
  );
};

export default ReviewForm;

import { useFormInput } from "../hooks/useFormInput";
import { useGlobalState } from "../hooks/useGlobalState";
import { ReviwFormProps } from "../types/types";

const ReviewForm = ({
  book,
  isRead,
  setIsRead,
  reviewFormOpen,
  setReviewFormOpen,
}: ReviwFormProps) => {
  const { dispatch } = useGlobalState();

  const rating = useFormInput("");
  const review = useFormInput("");
  const numPages = useFormInput("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (parseInt(rating.value) < 1 || parseInt(rating.value) > 5) {
      alert("Rating must be between 1 and 5.");
      return;
    }
    if (parseInt(numPages.value) <= 0) {
      alert("Number of pages must be greater than 0.");
      return;
    }

    const readBook = {
      key: book.key,
      title: book.title,
      first_publish_year: book.first_publish_year,
      author_name: book.author_name,
      cover_i: book.cover_i,
      rating: rating.value,
      review: review.value,
      numPages: numPages.value,
    };

    dispatch({
      type: "ADD_READ_BOOK",
      payload: readBook,
    });

    setIsRead(!isRead);
    setReviewFormOpen(!reviewFormOpen);
  };

  return (
    <form className="flex flex-col w-fit mt-5" onSubmit={handleSubmit}>
      <label htmlFor="review">Review:</label>
      <textarea
        className="border border-gray-300"
        {...review}
        id="review"
        placeholder="Enter your review here..."
        autoFocus
      />

      <label htmlFor="rating">Rating:</label>
      <input
        className="border border-gray-300"
        type="number"
        {...rating}
        id="rating"
        placeholder="Enter your rating here..."
        min="1"
        max="5"
      />

      <label htmlFor="numPages">Number of pages:</label>
      <input
        className="border border-gray-300"
        type="number"
        {...numPages}
        id="numPages"
        placeholder="Enter number of pages here..."
        min="1"
      />

      <button
        className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none active:bg-red-500 active:hover:bg-red-700"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default ReviewForm;

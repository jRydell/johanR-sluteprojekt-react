import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../state/GlobalStateContext";

const AddBookReview = () => {
  const { bookKey = "" } = useParams<{ bookKey: string }>();
  const { dispatch } = useContext(GlobalStateContext);
  const navigate = useNavigate();

  const [review, setReview] = useState<{
    bookKey: string;
    userReview: string;
    userRating: string;
    userNumPages: string;
  }>({
    bookKey: "",
    userReview: "",
    userRating: "",
    userNumPages: "",
  });

  useEffect(() => {
    // Set the bookKey in the review object
    setReview({ ...review, bookKey: bookKey });
  }, [bookKey]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create the updated book object
    const updatedBook = {
      bookKey: review.bookKey,
      userReview: review.userReview,
      userRating: review.userRating,
      userNumPages: review.userNumPages,
    };

    // Dispatch action to add book review
    dispatch({
      type: "ADD_BOOK_REVIEW",
      payload: updatedBook,
    });

    // Redirect to the book review page
    navigate("/read-books");
  };

  return (
    <div>
      <h2>Add Book Review</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Review:
          <textarea
            name="userReview"
            value={review.userReview}
            onChange={handleChange}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            name="userRating"
            value={review.userRating}
            onChange={handleChange}
          />
        </label>
        <label>
          Number of Pages:
          <input
            type="number"
            name="userNumPages"
            value={review.userNumPages}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default AddBookReview;

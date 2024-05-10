import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../state/GlobalStateContext";

const AddBookReview = () => {
  const { bookID = "" } = useParams<{ bookID: string }>();
  const { dispatch } = useContext(GlobalStateContext);
  const navigate = useNavigate();

  // Separate state for form inputs
  const [review, setReview] = useState({
    userReview: "",
    userRating: "",
    userNumPages: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Update form state based on input changes
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create the object to be dispatched
    const newReview = {
      bookID: bookID,
      userReview: review.userReview,
      userRating: review.userRating,
      userNumPages: review.userNumPages,
    };

    // Log the new object
    console.log("New Review Object:", newReview);

    // Dispatch action to add book review with updated review details
    dispatch({
      type: "ADD_BOOK_REVIEW",
      payload: newReview,
    });

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

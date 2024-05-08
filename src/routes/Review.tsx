import { useParams } from "react-router-dom";

const Review = () => {
  const { bookKey } = useParams();

  // Fetch additional book details using the book key

  return (
    <div>
      <h1>Review Page for Book {bookKey}</h1>
      {/* Add review form here */}
    </div>
  );
};

export default Review;

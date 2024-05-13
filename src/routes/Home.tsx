import { useGlobalState } from "../hooks/useGlobalState";

const Home = () => {
  const { state } = useGlobalState();

  const totalReadBooks = state.readBooks.length;
  const totalFavoriteBooks = state.favoriteBooks.length;
  const totalPagesRead = state.readBooks.reduce(
    (total, book) => total + book.numPages,
    0
  );

  const totalRating = state.readBooks.reduce(
    (total, book) => total + book.rating,
    0
  );
  const averageRating = totalReadBooks > 0 ? totalRating / totalReadBooks : 0;

  const averageLength =
    totalReadBooks > 0 ? totalPagesRead / totalReadBooks : 0;

  return (
    <>
      <section>
        <h2 className="text center mb-5">Bookster Stats:</h2>
        <ul>
          <li>Number of read books: {totalReadBooks}</li>
          <li>Number of favorite books: {totalFavoriteBooks}</li>
          <li>Number of pages read: {totalPagesRead}</li>
          <li>Average book rating: {averageRating.toFixed(1)}</li>
          <li>Average length of book: {averageLength.toFixed(1)} pages</li>
        </ul>
      </section>
    </>
  );
};

export default Home;

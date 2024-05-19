import { useGlobalState } from "../hooks/useGlobalState";

const Home = () => {
  const { state } = useGlobalState();

  const totalReadBooks = state.readBooks.length;
  const totalFavoriteBooks = state.favoriteBooks.length;
  const totalPagesRead = state.readBooks.reduce(
    (total, book) => total + Number(book.numPages),
    0
  );

  const totalRating = state.readBooks.reduce(
    (total, book) => total + Number(book.rating),
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
          <li>Read books: {totalReadBooks}</li>
          <li>Favorite books: {totalFavoriteBooks}</li>
          <li>Pages read: {totalPagesRead}</li>
          <li>Average book rating: {averageRating.toFixed(1)}</li>
          <li>Average length of book: {averageLength.toFixed(1)} pages</li>
        </ul>
      </section>
    </>
  );
};

export default Home;

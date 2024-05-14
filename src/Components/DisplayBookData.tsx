import { useFetch } from "../hooks/useFetch";
import { Book } from "../types/types";
import BookCard from "./BookCard";

const DisplayBookData: React.FC<{ url: string }> = ({ url }) => {
  const { data, loading, error } = useFetch<{ docs: Book[] }>(url);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No books found.</p>;

  return (
    <section>
      <h2 className="">Search Results:</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.docs.map((book: Book) => (
          <li key={book.key}>
            <BookCard
              book={book}
              searchPageButtons={true}
              removeFavoriteButton={false}
              removeReadButton={false}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DisplayBookData;

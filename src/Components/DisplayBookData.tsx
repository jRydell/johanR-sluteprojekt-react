import { useEffect, useState } from "react";
import { Book } from "../types/types";
import BookCard from "./BookCard";
import { useFetch } from "../hooks/useFetch";

const DisplayBookData: React.FC<{ url: string }> = ({ url }) => {
  const { data, loading, error } = useFetch<{ docs: Book[] }>(url);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (url) {
      setHasSearched(true);
    }
  }, [url]);

  if (!hasSearched) return null;
  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || !data.docs.length) return <p>No books found.</p>;

  return (
    <section>
      <h2>Search Results:</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.docs.map((book: Book) => (
          <li className="border border-gray-300 rounded p-4" key={book.key}>
            <BookCard book={book} addButtons={true} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DisplayBookData;

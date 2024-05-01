import React from "react";
import { useFetch } from "../hooks/useFetch";

interface Book {
  key: string;
  title: string;
  author_name: string[];
  first_publish_year: number;
  cover_i: string;
}

const DisplayBookData: React.FC<{ url: string }> = ({ url }) => {
  const { data, loading, error } = useFetch<Book[]>(url) as Response<Book[]>;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data found.</p>;

  return (
    <div>
      <ul>
        {data.docs.map((item: Book) => (
          <li key={item.key}>
            <h3>Title: {item.title}</h3>
            <h3>Authors: {item.author_name.join(", ")}</h3>
            <h3>First Publish Year: {item.first_publish_year}</h3>
            {item.cover_i && (
              <img
                src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
                alt="Book Cover"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayBookData;

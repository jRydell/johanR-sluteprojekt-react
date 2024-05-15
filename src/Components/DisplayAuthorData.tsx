import { useFetch } from "../hooks/useFetch";
import { Author } from "../types/types";
import AuthorCard from "./AuthorCard";

const DisplayBookData: React.FC<{ url: string }> = ({ url }) => {
  const { data, loading, error } = useFetch<{ docs: Author[] }>(url);

  if (loading) return <p>Loading authors...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || !data.docs.length) return <p>No authors found.</p>;

  return (
    <section>
      <h2 className="">Search Results:</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.docs.map((author: Author) => (
          <li className="border border-gray-300 rounded p-4" key={author.key}>
            <AuthorCard author={author} addButton={true} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DisplayBookData;

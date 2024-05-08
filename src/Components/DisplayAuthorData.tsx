import { useFetch } from "../hooks/useFetch";
import { Author } from "../types/types";
import { renderAuthors } from "../utils/renderItems";

const DisplayBookData: React.FC<{ url: string }> = ({ url }) => {
  const { data, loading, error } = useFetch<{ docs: Author[] }>(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data found.</p>;

  return (
    <section>
      <h2 className="">Search Results:</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {renderAuthors(data.docs, false, true)}
      </ul>
    </section>
  );
};

export default DisplayBookData;

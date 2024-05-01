import { useFetch } from "../hooks/useFetch";
import "./DataDisplayComponent.css";

type DataProps = {
  title: string;
  author: string;
};

const BookData = ({ url }: { url: string }) => {
  const { data, loading, error } = useFetch<DataProps>(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (data)
    return (
      <div className="DataDisplayComponent">
        <h3>{data.title} </h3>
        <p>Author: {data.author}</p>
      </div>
    );
};

export default BookData;

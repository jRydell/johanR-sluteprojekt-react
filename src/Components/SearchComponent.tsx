import { useState } from "react";
//import DisplayAuthorData from "./DisplayAuthorData";
import DisplayBookData from "./DisplayBookData";

type SearchComponentProps = {
  url: string;
  placeholder: string;
};

const SearchComponent: React.FC<SearchComponentProps> = ({
  url,
  placeholder,
}) => {
  const [input, setInput] = useState("");
  const [searchUrl, setSearchUrl] = useState("");

  const handleSearch = () => {
    const formattedInput = input.replace(/ /g, "+");

    const constructedUrl = `${url}${formattedInput}`;
    setSearchUrl(constructedUrl);
    setInput("");
  };

  return (
    <section>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none active:bg-red-500 active:hover:bg-red-700"
        onClick={handleSearch}
      >
        Search
      </button>
      {/* {searchUrl && <DisplayAuthorData url={searchUrl} />} */}
      {searchUrl && <DisplayBookData url={searchUrl} />}
    </section>
  );
};

export default SearchComponent;

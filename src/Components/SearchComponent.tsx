import { useState } from "react";
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
      <h2>Search</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={handleSearch}>Search</button>
      {/* {searchUrl && <DisplayAuthorData url={searchUrl} />} */}
      {searchUrl && <DisplayBookData url={searchUrl} />}
    </section>
  );
};

export default SearchComponent;

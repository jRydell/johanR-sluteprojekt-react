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
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={handleSearch}>Search</button>
      {searchUrl && <DisplayBookData url={searchUrl} />}
    </div>
  );
};

export default SearchComponent;

import { useState } from "react";
import DisplayAuthorData from "./DisplayAuthorData";

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
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={handleSearch}>Search</button>
      {searchUrl && <DisplayAuthorData url={searchUrl} />}
    </div>
  );
};

export default SearchComponent;

import React, { useState } from "react";
import DisplayBookData from "./DisplayBookData";

type SearchComponentProps = {
  url: string;
  placeholder: string;
};

const SearchComponent: React.FC<SearchComponentProps> = ({
  url,
  placeholder,
}) => {
  const [query, setQuery] = useState("");
  const [searchUrl, setSearchUrl] = useState("");

  const handleSearch = () => {
    const formattedQuery = query.replace(/ /g, "+");

    const constructedUrl = `${url}${formattedQuery}`;
    setSearchUrl(constructedUrl);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={handleSearch}>Search</button>
      {searchUrl && <DisplayBookData url={searchUrl} />}
    </div>
  );
};

export default SearchComponent;

import React, { useState } from "react";
import DisplayBookData from "./DisplayBookData";

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState("");
  const [searchUrl, setSearchUrl] = useState("");

  const handleSearch = () => {
    const constructedUrl = `https://openlibrary.org/search.json?q=${query}`;
    setSearchUrl(constructedUrl);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search query"
      />
      <button onClick={handleSearch}>Search</button>
      {searchUrl && <DisplayBookData url={searchUrl} />}
    </div>
  );
};

export default SearchComponent;

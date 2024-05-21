import { ChangeEvent, useState } from "react";
import DisplayBookData from "./DisplayBookData";
import DisplayAuthorData from "./DisplayAuthorData";

const SearchComponent = () => {
  const [input, setInput] = useState("");
  const [searchUrl, setSearchUrl] = useState("");
  const [searchType, setSearchType] = useState("books");
  const [searchTriggered, setSearchTriggered] = useState(false);

  const BASE_URL = "https://openlibrary.org/search";

  const handleSearch = () => {
    const formattedInput = input.replace(/ /g, "+");
    const url =
      searchType === "books"
        ? `${BASE_URL}.json?title=`
        : `${BASE_URL}/authors.json?q=`;
    setSearchUrl(`${url}${formattedInput}`);
    setSearchTriggered(true);
  };

  const handleSearchTypeChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSearchType(e.target.value);
    setInput("");
    setSearchTriggered(false);
  };

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-row mb-4 border-2 border-gray rounded-md p-1 ">
        <label htmlFor="searchType" className="self-center mr-2">
          Search for:
        </label>
        <select
          value={searchType}
          id="searchType"
          onChange={handleSearchTypeChange}
          className="mr-2"
        >
          <option value="books">Books</option>
          <option value="authors">Authors</option>
        </select>
        <input
          type="text"
          value={input}
          id="searchInput"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder={
            searchType === "books" ? "Enter book title" : "Enter name of author"
          }
          className="mr-2 px-2 py-1"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none active:bg-red-500 active:hover:bg-red-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {searchTriggered && (
        <section className="mt-4">
          {searchType === "books" ? (
            <DisplayBookData url={searchUrl} />
          ) : (
            <DisplayAuthorData url={searchUrl} />
          )}
        </section>
      )}
    </section>
  );
};

export default SearchComponent;

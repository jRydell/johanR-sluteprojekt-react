import { ChangeEvent, useState } from "react";
import DisplayBookData from "./DisplayBookData";
import DisplayAuthorData from "./DisplayAuthorData";

const SearchComponent = () => {
  const [input, setInput] = useState("");
  const [searchUrl, setSearchUrl] = useState("");
  const [searchType, setSearchType] = useState("books");
  const [searchTriggered, setSearchTriggered] = useState(false);

  const handleSearch = () => {
    const formattedInput = input.replace(/ /g, "+");
    const baseUrl =
      searchType === "books"
        ? "https://openlibrary.org/search.json?title="
        : "https://openlibrary.org/search/authors.json?q=";
    const constructedUrl = `${baseUrl}${formattedInput}`;
    setSearchUrl(constructedUrl);
    setSearchTriggered(true);
  };

  const handleSearchTypeChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSearchType(e.target.value);
    setInput("");
    setSearchTriggered(false);
  };

  return (
    <section>
      <label className="self-center" htmlFor="searchType">
        Search for:
      </label>
      <select
        value={searchType}
        id="searchType"
        onChange={handleSearchTypeChange}
      >
        <option value="books">Books</option>
        <option value="authors">Authors</option>
      </select>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={
          searchType === "books" ? "Enter book title" : "Enter name of author"
        }
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none active:bg-red-500 active:hover:bg-red-700"
        onClick={handleSearch}
      >
        Search
      </button>

      {searchTriggered && searchType === "books" ? (
        <DisplayBookData url={searchUrl} />
      ) : searchTriggered && searchType === "authors" ? (
        <DisplayAuthorData url={searchUrl} />
      ) : null}
    </section>
  );
};

export default SearchComponent;

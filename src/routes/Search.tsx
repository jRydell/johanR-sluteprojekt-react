import SearchComponent from "../Components/SearchComponent";

const Search = () => {
  return (
    <>
      <div>Search!</div>

      <SearchComponent
        placeholder={"Enter a book"}
        url={"https://openlibrary.org/search.json?q="}
      />
    </>
  );
};

export default Search;

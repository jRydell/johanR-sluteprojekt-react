import SearchComponent from "../Components/SearchComponent";

const Search = () => {
  return (
    <>
      <section className="">
        <h2>Find books</h2>
        <SearchComponent
          placeholder={"Enter a book"}
          url={"https://openlibrary.org/search.json?q="}
        />
      </section>
    </>
  );
};

export default Search;

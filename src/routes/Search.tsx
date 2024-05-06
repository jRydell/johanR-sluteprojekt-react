import SearchComponent from "../Components/SearchComponent";

const Search = () => {
  const url = {
    books: "https://openlibrary.org/search.json?title=",
    authors: "https://openlibrary.org/search.json?author=",
  };

  return (
    <>
      <section className="">
        <h2>Find books</h2>
        <SearchComponent placeholder={"Enter a book"} url={url.books} />
      </section>
    </>
  );
};

export default Search;

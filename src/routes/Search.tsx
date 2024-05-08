import SearchComponent from "../Components/SearchComponent";

const Search = () => {
  const url = {
    books: "https://openlibrary.org/search.json?title=",
    authors: "https://openlibrary.org/search/authors.json?q=",
    book: "Search for books",
    author: "Search for authors",
  };

  return (
    <>
      <section className="">
        <h2>Search</h2>
        <SearchComponent placeholder={url.author} url={url.authors} />
      </section>
    </>
  );
};

export default Search;

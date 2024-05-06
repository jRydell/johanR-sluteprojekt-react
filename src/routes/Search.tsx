import SearchComponent from "../Components/SearchComponent";

const Search = () => {
  const url = {
    books: "https://openlibrary.org/search.json?title=",
    authors: "https://openlibrary.org/search/authors.json?q=",
    title: "Search by title",
    author: "Search by author",
  };

  return (
    <>
      <section className="">
        <h2>Find Author</h2>
        <SearchComponent placeholder={url.title} url={url.books} />
      </section>
    </>
  );
};

export default Search;

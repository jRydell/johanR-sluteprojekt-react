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
        <SearchComponent placeholder={url.book} url={url.books} />
      </section>
    </>
  );
};

export default Search;

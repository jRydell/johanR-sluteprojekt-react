export type Action =
  | { type: "ADD_FAVORITE_BOOK"; payload: Book }
  | { type: "ADD_READ_BOOK"; payload: Book }
  | { type: "REMOVE_FAVORITE_BOOK"; payload: Book["key"] }
  | { type: "REMOVE_READ_BOOK"; payload: Book["key"] }
  | { type: "ADD_AUTHOR"; payload: Author }
  | { type: "REMOVE_AUTHOR"; payload: Author["key"] };

export type Book = {
  key: string;
  title: string;
  author_name: string[];
  first_publish_year: number;
  cover_i: string;
  rating: string;
  review: string;
  numPages: string;
};

export type Author = {
  key: string;
  name: string;
  birth_date: string;
  death_date: string;
  top_work: string;
  alternate_names: string;
};

export type GlobalState = {
  favoriteBooks: Book[];
  favoriteAuthors: Author[];
  readBooks: Book[];
};

export type BookCardProps = {
  book: Book;
  searchPageButtons?: boolean;
  removeFavoriteButton: boolean;
  removeReadButton: boolean;
};

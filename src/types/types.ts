export type Action =
  | { type: "ADD_FAVORITE_BOOK"; payload: Book }
  | { type: "REMOVE_FAVORITE_BOOK"; payload: Book }
  | { type: "ADD_READ_BOOK"; payload: Book }
  | { type: "REMOVE_READ_BOOK"; payload: Book }
  | { type: "ADD_AUTHOR"; payload: Author };

export type Book = {
  key: string;
  title: string;
  author_name: string[];
  first_publish_year: number;
  cover_i: string;
  description: string;
};

export type Author = {
  key: string;
  name: string;
};

export type GlobalState = {
  favoriteBooks: Book[];
  favoriteAuthors: Author[];
  readBooks: Book[];
};

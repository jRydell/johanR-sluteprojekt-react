export type Action =
  | { type: "TOGGLE_FAVORITE_BOOK"; payload: Book }
  | { type: "TOGGLE_READ_BOOK"; payload: Book }
  | { type: "REMOVE_FAVORITE_BOOK"; payload: Book }
  | { type: "ADD_READ_BOOK"; payload: Book }
  | { type: "REMOVE_READ_BOOK"; payload: Book }
  | { type: "ADD_AUTHOR"; payload: Author }
  | { type: "REMOVE_AUTHOR"; payload: Author["key"] };

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
  author_name: string;
  subject: string[];
};

export type GlobalState = {
  favoriteBooks: Book[];
  favoriteAuthors: Author[];
  readBooks: Book[];
};

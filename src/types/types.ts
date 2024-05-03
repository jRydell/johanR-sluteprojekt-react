export type Action =
  | { type: "ADD_BOOK"; payload: Book }
  | { type: "REMOVE_BOOK"; payload: Book }
  | { type: "ADD_AUTHOR"; payload: Author };

export type Book = {
  key: string;
  title: string;
  author_name: string[];
  first_publish_year: number;
  cover_i: string;
  isRead: boolean;
  isFavorite: boolean;
  pages: number;
  review: {
    comment: string;
    rating: number;
  };
  description: string;
};

export type Author = {
  key: string;
  name: string;
};

export type GlobalState = {
  favoriteBooks: Book[];
  favoriteAuthors: Author[];
};

export type Book = {
  key: string;
  title: string;
  author_name: string[];
  first_publish_year: number;
  cover_i: string;
  favorite: boolean;
  pages: number;
  review: {
    comment: string;
    rating: number;
  };
};

export type Action = { type: "ADD_BOOK"; payload: Book };

export type GlobalState = {
  readBooks: Book[];
};

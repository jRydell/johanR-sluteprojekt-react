import { createContext } from "react";
import { Action, Book, Author, GlobalState } from "../types/types";

export const initialState: GlobalState = {
  favoriteBooks: [
    {
      key: "1",
      title: "To Kill a Mockingbird",
      author_name: ["Harper Lee"],
      first_publish_year: 1960,
      cover_i: "1",
      rating: 4.5,
      review: "A classic novel",
      numPages: 281,
    },
    {
      key: "2",
      title: "1984",
      author_name: ["George Orwell"],
      first_publish_year: 1949,
      cover_i: "2",
      rating: 4.8,
      review: "A dystopian masterpiece",
      numPages: 328,
    },
    {
      key: "3",
      title: "The Great Gatsby",
      author_name: ["F. Scott Fitzgerald"],
      first_publish_year: 1925,
      cover_i: "3",
      rating: 4.3,
      review: "An American classic",
      numPages: 180,
    },
  ] as Book[],
  favoriteAuthors: [] as Author[],
  readBooks: [
    {
      key: "4",
      title: "The Catcher in the Rye",
      author_name: ["J.D. Salinger"],
      first_publish_year: 1951,
      cover_i: "4",
      rating: 4.1,
      review: "A coming-of-age classic",
      numPages: 224,
    },
    {
      key: "5",
      title: "Pride and Prejudice",
      author_name: ["Jane Austen"],
      first_publish_year: 1813,
      cover_i: "5",
      rating: 4.6,
      review: "A romantic masterpiece",
      numPages: 279,
    },
    {
      key: "6",
      title: "The Hobbit",
      author_name: ["J.R.R. Tolkien"],
      first_publish_year: 1937,
      cover_i: "6",
      rating: 4.7,
      review: "An epic fantasy adventure",
      numPages: 310,
    },
  ] as Book[],
};

export const GlobalStateContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

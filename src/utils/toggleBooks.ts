import { Book } from "../types/types";

export function toggleBooks(booksArray: Book[], payload: Book) {
  //Check if book is in the array
  const bookIndex = booksArray.findIndex(
    (book: Book) => book.key === payload.key
  );
  if (bookIndex !== -1) {
    // If book is found, remove it from the array
    return booksArray.filter((_, index: number) => index !== bookIndex);
  } else {
    // If book is not found, add it to the array
    return [...booksArray, payload];
  }
}

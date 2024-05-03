import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import NotFound from "./routes/NotFound";
import Book from "./routes/Book";
import Search from "./routes/Search";
import FavoriteAuthors from "./routes/FavoriteAuthors";
import MyReadBooks from "./routes/FavoriteBooks";
import { GlobalStateProvider } from "./Components/GlobalStateProvider";
import Author from "./routes/Author";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/favorite-books",
        element: <MyReadBooks />,
        children: [
          {
            path: "/favorite-books/:bookId",
            element: <Book />,
          },
        ],
      },
      {
        path: "/favorite-authors",
        element: <FavoriteAuthors />,
        children: [
          {
            path: "/favorite-authors/:authorId",
            element: <Author />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <RouterProvider router={router} />
    </GlobalStateProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import NotFound from "./routes/NotFound";
import Book from "./routes/Book";
import Search from "./routes/Search";
import FavoriteAuthors from "./routes/MyFavoriteAuthors";
import MyReadBooks from "./routes/MyReadBooks";

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
        path: "/my-read-books",
        element: <MyReadBooks />,
        children: [
          {
            path: "/my-read-books/:bookId",
            element: <Book />,
          },
        ],
      },
      {
        path: "/my-favorite-authors",
        element: <FavoriteAuthors />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

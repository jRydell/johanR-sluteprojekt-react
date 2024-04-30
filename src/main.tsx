import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import NotFound from "./routes/NotFound";
import Library from "./routes/Library";
import Book from "./routes/Book";
import FindBooks from "./routes/FindBooks";
import FavoriteAuthors from "./routes/FavoriteAuthors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/find-books",
        element: <FindBooks />,
      },
      {
        path: "/library",
        element: <Library />,
        children: [
          {
            path: "/library/:bookId",
            element: <Book />,
          },
        ],
      },
      {
        path: "/favorite-authors",
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

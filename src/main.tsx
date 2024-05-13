import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import NotFound from "./routes/NotFound";
import Search from "./routes/Search";
import FavoriteBooks from "./routes/FavoriteBooks";
import ReadBooks from "./routes/ReadBooks";
import FavoriteAuthors from "./routes/FavoriteAuthors";
import React from "react";
import { GlobalStateProvider } from "./components/GlobalStateProvider";
import Home from "./routes/Home";

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
        element: <FavoriteBooks />,
      },
      {
        path: "/read-books",
        element: <ReadBooks />,
      },
      {
        path: "/favorite-authors",
        element: <FavoriteAuthors />,
      },
      {
        path: "/",
        element: <Home />,
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

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Root() {
  const links = [
    { to: "/", text: "Home" },
    { to: "/search", text: "Search" },
    { to: "/favorite-books", text: "Favorite Books" },
    { to: "/read-books", text: "Read Books" },
    { to: "/favorite-authors", text: "Favorite Authors" },
  ];

  return (
    <>
      <header className="mt-0 py-5 border-b-2 border-gray-300 shadow-lg  ">
        <h1 className="flex justify-center text-orange-500 mb-10 text-5xl">
          Bookster📚
        </h1>
        <Navbar links={links} />
      </header>
      <main className="flex justify-center m-20">
        <Outlet />
      </main>
    </>
  );
}

export default Root;

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Root() {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/search", text: "Search" },
    { to: "/favorite-books", text: "Favorite Books" },
    { to: "/read-books", text: "Read Books" },
    { to: "/favorite-authors", text: "Favorite Authors" },
  ];

  return (
    <>
      <header className="mt-5 ">
        <h1 className="flex justify-center text-orange-500 mb-5 text-3xl">
          Bookster
        </h1>
        <Navbar links={navLinks} />
      </header>
      <main className="flex justify-center  m-20">
        <Outlet />
      </main>
    </>
  );
}

export default Root;

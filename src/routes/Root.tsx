import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

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
      <header>
        <h1 className="flex justify-center text-orange-500">Bookster</h1>
        <Navbar links={navLinks} />
      </header>
      <main className="flex justify-center  m-20">
        <Outlet />
      </main>
    </>
  );
}

export default Root;

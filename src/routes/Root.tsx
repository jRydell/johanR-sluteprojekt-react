import { NavLink, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <header>
        <h1 className="flex justify-center text-orange-500">Bookster</h1>
        <nav className="justify-center flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-500" : "text-black"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-500" : "text-black"
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/favorite-books"
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-500" : "text-black"
            }
          >
            Favorite Books
          </NavLink>
          <NavLink
            to="/read-books"
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-500" : "text-black"
            }
          >
            Read Books
          </NavLink>
          <NavLink
            to="/favorite-authors"
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-500" : "text-black"
            }
          >
            Favorite Authors
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;

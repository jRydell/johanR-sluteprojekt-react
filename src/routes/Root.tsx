import { NavLink, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <header>
        <h1 className="text-orange-500">Bookster</h1>
        <nav>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/search"> Search </NavLink>
          <NavLink to="/my-read-books"> My Read Books </NavLink>
          <NavLink to="/my-favorite-authors"> My Favorite Authors </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;

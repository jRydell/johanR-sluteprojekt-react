import { NavLink, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <header>
        <h1 className="text-orange-500">Bookster</h1>
        <nav>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/search"> Search </NavLink>
          <NavLink to="/favorite-books"> Favorite Books </NavLink>
          <NavLink to="/read-books"> Read Books </NavLink>
          <NavLink to="/favorite-authors"> Favorite Authors </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;

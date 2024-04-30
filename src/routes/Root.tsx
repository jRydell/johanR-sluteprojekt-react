import { NavLink, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <header>
        <h1 className="text-orange-500">Bookster</h1>
        <nav>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/search"> Search </NavLink>
          <NavLink to="/library"> Library </NavLink>
          <NavLink to="/favorite-authors"> Favorite Authors </NavLink>
        </nav>
      </header>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me
      </button>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;

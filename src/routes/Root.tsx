import { NavLink, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <header>
        <h1>BOOKSTER, WORK IN PROGRESS SEE DEVELOP BRANCHES</h1>
        <nav>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/search"> Search </NavLink>
          <NavLink to="/library"> Library </NavLink>
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

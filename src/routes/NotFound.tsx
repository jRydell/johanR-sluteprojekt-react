import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <h1>Error 404 page not found.</h1>
      <p>
        <NavLink to="/"> Back to home </NavLink>
      </p>
    </section>
  );
};

export default NotFound;

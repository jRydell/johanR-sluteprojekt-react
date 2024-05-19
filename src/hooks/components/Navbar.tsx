import { NavLink } from "react-router-dom";
import { Link } from "../../types/types";

const Navbar = ({ links }: { links: Link[] }) => {
  return (
    <>
      <nav className="flex justify-center gap-4">
        {links.map((link: Link, index: number) => (
          <NavLink
            key={index}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-blue-500 text-xl"
                : "hover:text-blue-500 text-xl"
            }
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Navbar;

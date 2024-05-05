import { NavLink } from "react-router-dom";

type Link = {
  to: string;
  text: string;
};

const Navbar = ({ links }: { links: Link[] }) => {
  return (
    <>
      <nav className="flex justify-center gap-4">
        {links.map((link: Link, index: number) => (
          <NavLink
            key={index}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-500" : "text-black"
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

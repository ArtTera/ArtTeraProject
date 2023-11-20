import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink to="/" exact>
        Home
      </NavLink>{" "}
      | <NavLink to="about">About us</NavLink>
    </nav>
  );
}

export default Navbar;

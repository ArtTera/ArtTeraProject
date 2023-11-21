import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="src/components/about.jsx">About</NavLink>|{" "}
      <NavLink to="src/components/contact.jsx">contact</NavLink>|{" "}
      <NavLink to="src/components/Help!.jsx">HELP?</NavLink>

    </nav>
  );
}

export default Navbar;

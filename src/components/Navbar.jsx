import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
<<<<<<< HEAD
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="src/components/about.jsx">About</NavLink>|{" "}
      <NavLink to="src/components/contact.jsx">contact</NavLink>|{" "}
      <NavLink to="src/components/Help!.jsx">HELP?</NavLink>|{" "}

=======
      <NavLink to="/" exact>
        Home
      </NavLink>{" "}
      | <NavLink to="about">About us</NavLink>
>>>>>>> de52f4f65363dc0e219e74534c542ce187a27d92
    </nav>
  );
}

export default Navbar;

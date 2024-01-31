import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> |{" "}
      <NavLink to="/addPaintingPage">Create</NavLink> |{" "}
      <NavLink to="/SignupPage">Signup</NavLink> |{" "}
      <NavLink to="/LoginPage">Login</NavLink>
    </nav>
  );
}

export default Navbar;

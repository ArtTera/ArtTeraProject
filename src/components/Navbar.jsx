import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/">   About</Link>

    </nav>
  );
}

export default Navbar;

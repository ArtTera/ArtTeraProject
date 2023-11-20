import { Link } from "react-router-dom";
const aboutbg = {
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(src/assets/about.jpg)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
function about() {
  return (
    <div style={aboutbg}>
       <nav className="nav">
      <Link to="/">about</Link>
      <p>About This project</p>
    </nav>
    </div>
   
  );
}

export default about;

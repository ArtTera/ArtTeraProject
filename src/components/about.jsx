import { Link } from "react-router-dom";

function about() {
  return (
    <div  style={{
      backgroundImage: 'src/assets/about.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'}}
      >
       <nav className="nav">
      <Link to="/">about</Link>
      <p>About This project</p>
    </nav>
    </div>
   
  );
}

export default about;

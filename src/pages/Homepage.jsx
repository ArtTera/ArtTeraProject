import { Link } from "react-router-dom";


const HomePage = () => {
  return (
      <div className="home-title"><h1 className="p-name">ArtTera</h1>
      <p className="text">
      Experience the vibrant tapestry of artistic expression at ArtTera Gallery,<br></br> where every brushstroke tells a unique story,<br></br> and creativity knows no bounds
      </p>
      <Link to="/painting">
        <br></br>
      <button className="view">VIEW ME!</button>
    </Link></div>
  );
};
export default HomePage;

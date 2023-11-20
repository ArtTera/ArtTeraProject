import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="home">
      <h1 className="home-title">ArtTera</h1>
      <Link to="/painting">
        <button>VIEW ME!</button>
      </Link>
    </div>
  );
};
export default HomePage;

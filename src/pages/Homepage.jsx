import Painting from "./Painitng";

const HomePage = () => {
  return (
    <div className="home">
      <h1 className="home-title">ArtTera</h1>
      <button onClick={Painting}> View Me! </button>
    </div>
  );
};

export default HomePage;

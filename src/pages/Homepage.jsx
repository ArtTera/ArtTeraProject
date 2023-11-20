import Painting from "./Painting";

const containerStyle = {
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(src/assets/image-from-rawpixel-id-6233550-jpeg.jpg)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const HomePage = () => {
  return (
    <div style={containerStyle} className="home">
      <h1 className="home-title">ArtTera</h1>
      <button onClick={Painting}> View Me! </button>
    </div>
  );
};
export default HomePage;

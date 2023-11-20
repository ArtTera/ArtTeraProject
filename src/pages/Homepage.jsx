import Painting from "./Painitng";

const HomePage = () => {
  return (
    <div style={{
      backgroundImage: 'url(src/assets/image-from-rawpixel-id-6233550-jpeg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
    }}>
    <div className="home">
      <h1 className="home-title">ArtTera</h1>
      <button onClick={Painting}> View Me! </button>
    </div>
  );
}
export default HomePage;

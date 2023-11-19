import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/Homepage";
import Cart from "./pages/Cart";
import Painting from "./pages/Painitng";
import PaymentMethod from "./pages/PaymentMethods";

const containerStyle = {
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(src/assets/image-from-rawpixel-id-6233550-jpeg.jpg)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function App() {
  return (
    <div  style={{
      backgroundImage: 'url(src/assets/image-from-rawpixel-id-6233550-jpeg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
    }}>
      <><Navbar /><Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Painiting" element={<Painting />} />
          <Route path="/PaymentMethod" element={<PaymentMethod />} />
        </Routes></>
    </div>
  );
}

export default App;

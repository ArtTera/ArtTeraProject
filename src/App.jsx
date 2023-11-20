import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import Cart from "./pages/Cart";
import Painting from "./pages/Painting";
import PaymentMethod from "./pages/PaymentMethods";
import About from "./components/about";
import Footer from "./components/Footer";

function App() {
  return (
    <div  
    style={containerStyle}>
      <><Navbar /><Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/cart/:id" element={<Cart/>} />
          <Route path="/Painting" element={<Painting />} />
          <Route path="/PaymentMethod" element={<PaymentMethod />} />
        </Routes></>
    </div>
  );
}

export default App;

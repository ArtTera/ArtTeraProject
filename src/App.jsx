import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import Cart from "./pages/Cart";
import Painting from "./pages/Painting";
import PaymentMethod from "./pages/PaymentMethods";
import About from "./components/about";
import AddPaintingPage from "./pages/addPaintingPage";
import EditItem from "./pages/EditItem";
import Footer from "./components/Footer";



function App() {
  return (
      <><Navbar /><Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart/:id" element={<Cart />} />
      <Route path="/Painting" element={<Painting />} />
      <Route path="/PaymentMethod" element={<PaymentMethod />} />
      <Route path="/about" element={<About />} />
      <Route path="/addPaintingPage" element={<AddPaintingPage />} />
      <Route path="/EditItem/:picId" element={<EditItem />} />
      <Route path="/Footer" element={<Footer />} />

    </Routes></>
    
  );
}

export default App;

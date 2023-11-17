import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import Cart from "./pages/Cart";
import Painting from "./pages/Painitng";
import PaymentMethod from "./pages/PaymentMethods";
import Photos from "./pages/Photos";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Painiting" element={<Painting />} />
        <Route path="/PaymentMethod" element={<PaymentMethod />} />
        <Route path="/Photos" element={<Photos />} />
      </Routes>
    </div>
  );
}

export default App;

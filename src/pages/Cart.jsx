import { Link } from "react-router-dom";
import { useState } from "react";
const Cart = () => {
  // eslint-disable-next-line no-unused-vars
  const [cart,setCart]=useState([]);

  return (
    <div className="cart">
      <h1>cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt={item.title} />
          <h1>{item.title}</h1>
          <h2>{item.price}</h2>
          <p>{item.description}</p>
          <Link to={"src/pages/PaymentMethods.jsx"}>
            <button>Pay</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cart;

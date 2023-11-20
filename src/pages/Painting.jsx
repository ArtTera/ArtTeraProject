import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function Painting() {
  const [pic, setPic] = useState([]);

  const getPic = () => {
    axios
      .get("https://appi.adaptable.app/pic")

      .then((Response) => {
        setPic(Response.data);
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPic();
  }, []);
  const addToCart = (picId) => {
    console.log({ picId });
  };

  return (
    <div className="pic">
      <h1>Paintings</h1>

      {pic.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt={item.title} />
          <h1>{item.title}</h1>
          <h2>{item.price}</h2>
          <p>{item.description}</p>

          <Link to={`/cart/${item.id}`}>
            <button onClick={() => addToCart(item.id)}>ADD TO CART</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Painting;

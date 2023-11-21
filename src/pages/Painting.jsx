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

  const deletePic = (picId) => {
    axios
      .delete(`https://appi.adaptable.app/pic/${picId}`)
      .then((response) => {
        console.log("Picture deleted successfully");
        console.log(response);
        getPic();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="pic">
      <h1>Paintings</h1>
      <Link to="/addPaintingPage">
                <p>
                    <button>Create</button>
                </p>
            </Link>

      {pic.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt={item.title} />
          <h1>{item.title}</h1>
          <h2>{item.price}</h2>
          <p>{item.description}</p>

          <Link to={`/cart/${item.id}`}>
            <button onClick={() => addToCart(item.id)}>ADD TO CART</button>
          </Link>
          <button onClick={() => deletePic(item.id)}>DELETE</button>
        </div>
      ))}
    </div>
  );
}

export default Painting;

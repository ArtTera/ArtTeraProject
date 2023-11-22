import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

function Painting() {
  const [pic, setPic] = useState([]);
  const navigate = useNavigate();

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
  const editPic = (picId) => {
    navigate(`/edit/${picId}`);
  };

  return (
    <div className="pic">
      {pic.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt={item.title} />
          <h1>{item.title}</h1>
          <h2>{item.price}</h2>
          <p>{item.description}</p>
<div className="icons-container">
          <Link to={`/cart/${item.id}`} className="icons-container">
            <button data-quantity="0" className="btn-cart" onClick={addToCart}>
              <svg
                className="icon-cart"
                viewBox="0 0 24.38 30.52"
                height="30.52"
                width="24.38"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>icon-cart</title>
                <path
                  transform="translate(-3.62 -0.85)"
                  d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                ></path>
              </svg>
              <span className="quantity"></span>
            </button>{" "}
            <button className="btn" onClick={() => deletePic(item.id)}>
            <p className="paragraph"> delete </p>
            <span className="icon-wrapper">
              <svg
                className="icon"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </button>{" "}
          </Link>
          <Link to={`/EditItem/${item.id}`}>
            <button className="edit" onClick={() => editPic(item.id)}>
              <svg className="icon" viewBox="0 0 512 512">
                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
              </svg>
            </button>
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Painting;

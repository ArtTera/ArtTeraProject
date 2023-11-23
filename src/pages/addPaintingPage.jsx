import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddPaintingPage() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("0");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      description: description,
      title: title,
      price: price,
      img: img,
    };
    axios
      .post("https://appi.adaptable.app/pic", requestBody)
      .then((response) => {
        navigate("/painting");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="inputs-container">
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Creating</h1>
          <label>Title</label>
          <input
            className="inputs"
            type="text"
            placeholder="enter the title"
            value={title}
            required={true}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            className="inputs"
            type="text"
            placeholder="Add some description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            className="inputs"
            type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Img</label>
          <input
            className="inputs"
            type="URL"
            value={img}
            required={true}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </div>
        <div>
          <br></br>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}
export default AddPaintingPage;

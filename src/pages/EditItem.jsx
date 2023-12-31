import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditItem() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const { picId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://appi.adaptable.app/pic/${picId}`)
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setPrice(response.data.price);
        setImg(response.data.img);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [picId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      description: description,
      title: title,
      price: price,
      img: img,
    };

    axios
      .put(`https://appi.adaptable.app/pic/${picId}`, requestBody)
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
      <form onSubmit={handleFormSubmit}>
        <div>
          <h1>Editing</h1>
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
            type="text"
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
        <br></br>
        <button className="addBtn" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}
export default EditItem;

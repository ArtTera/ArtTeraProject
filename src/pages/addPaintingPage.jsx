import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




function AddPaintingPage() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
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
      .post("https://appi.adaptable.app/pic", requestBody )
      .then(response => {
        navigate("/painting");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="addPainting">
          <h3>adding</h3>
          <form onSubmit={handleSubmit}>
          <div>
              <label>Title</label>
              <input
                  type="text"
                  placeholder="enter the title"
                  value={title}
                  required={true}
                  onChange={(e) => {setTitle(e.target.value)}} />
          </div><div>
              <label>Description</label>
              <textarea
                  type="text"
                  placeholder="Add some description"
                  value={description}
                  onChange={(e) => { setDescription(e.target.value) }}/>
                  </div>
                  <div>
              <label>Price</label>
              <input
                  type="number"
                  value={price}
                  onChange={(e) => {setPrice(e.target.value)}} /></div><div>
              <label>Img</label>
              <input
                  type="URL"
                  value={img}
                  required={true}
                  onChange={(e) => {setImg(e.target.value)}} />
          </div>
          <div>
              <button>Add</button>
          </div>
        </form>
      
     
    </div>
  );
}
export default AddPaintingPage;

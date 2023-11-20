import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Painting() {
  const [pic,setPic]= useState([]);
  const getPic =() =>{
    axios.get("https://appi.adaptable.app/pic")
  
  .then ((Response)=>{
    setPic(Response.data);
  console.log(Response);
  })
  .catch((error) => {
    console.log(error);})
  };
    useEffect(() => {
      getPic();
  }, []);


  return (
    <div className="pic">
{pic.map(()=>{
  <div key={pic.id}>
    <img src={pic.img} alt={pic.title} />
    <h1>{pic.title}</h1>
    <h2>{pic.price}</h2>
    <p>{pic.description}</p>
    <Link to={`/${pic.id}`}></Link>

    </div>
})}
        <h1>Paintings</h1>

    </div>
  );
}
  
export default Painting;

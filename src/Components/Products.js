import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Products = (props) => {
  const params = useParams();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.proid}`)
      .then((resPro) => {
        // console.log(resPro);
        setTitle(resPro.data.title);
        setPrice(resPro.data.price);
        setDescription(resPro.data.description);
        setImage(resPro.data.image);
        setCategory(resPro.data.category);
        // console.log(image);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container my-5 pt-5 ">
      <div className="row ">
        <div className="col m-4 my-auto text-center">
          <img src={image} className=" " alt="" style={{ width: "300px" }} />
        </div>
        <div className="col my-auto">
          <h2 className="fw-bold my-3">{title}</h2>
          <p className="fw-bold fs-4 my-5 bg-success px-5 w-50 rounded-1 text-white">
            $ {price}
          </p>
          <h5 className="ps-2 py-2 my-3 w-75 fs-6 bg-secondary text-white rounded-1 ">
            {category}
          </h5>
          <p className="my-3" style={{ fontSize: "12px" }}>
            {description}
          </p>
          <button className="btn btn-lg btn-danger w-50">ADD TO CARD</button>
        </div>
      </div>
    </div>
  );
};
export default Products;

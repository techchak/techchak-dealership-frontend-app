/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./ProductListing.css";
// import { products } from "./../../backend/db/products";
import Navbar from "../../components/Navbar/Navbar";
// import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Axios from 'axios';

const ProductListing = () => {
  const [products,setProducts] = useState([]);

  // console.log(localStorage.getItem("token"))
  const getProducts = async () => {
    const config = {
      headers: {
          ContentType: 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          // lg: 'en',
          // ch: 'web'
      }
  }
     await Axios.get(`${process.env.REACT_APP_API}/product`, config)
 .then((res) => {
  console.log(res);
  setProducts(res.data.data)});

  };

useEffect(() => {
  getProducts();

},[]);


  return (
    <>
      <Navbar />
      <section className="middleSection">
        {/* <Sidebar /> */}
        <div className="content-box"> 
          <div className="product-container d-flex justify-content-evenly">
            {products.map(({ _id, title, price, image, description, category }) => (
              <div className="car-card">
                <div className="card_img">
                  <figure>
                    <Link to={`/product/${_id}`}>
                      <img src={image} alt="carImage" />
                    </Link>
                  </figure>
                  <div className="card_info">
                    <h3>{title}</h3>
                    <div className="car-price-div">
                      <span className="car-price">
                        Price : <span className="active_item">{price}</span>
                      </span>
                    </div>
                    <h6 style={{textAlign: "center"}}>{category}</h6>
                    <p>{description.substring(0,50) }...</p>
                  </div>
                </div>
                <div className="add-cart-btn d-flex align-center font_1r">
                  <button className="btn  flex-1 add-to-card" style={{backgroundColor: 'rgb(36, 182, 254) '}}>
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductListing;

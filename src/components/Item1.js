import React from "react";
import { Link } from "react-router-dom";
import "./Item1.css";

function Item1(props) {
  return (
    <div className="allproduct_one">
      <div className="card">
        <div className="card-body">
          <h5 className="product-title">{props.title2}</h5>
          <h3 className="product_price">
            <small>$</small>
            <strong>{props.price2}</strong>
          </h3>
          <div className="product_rating">
            {Array(props.rating2)
              .fill()
              .map((_) => (
                <p>*</p>
              ))}
          </div>
          <div className="product_image">
            <img src={props.image2} alt="" />
          </div>
          <button className="bttn">
            <Link to="checkout">Add to cart</Link>
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="product-title">{props.title3}</h5>
          <h3 className="product_price">
            <small>$</small>
            <strong>{props.price3}</strong>
          </h3>
          <div className="product_rating">
            {Array(props.rating3)
              .fill()
              .map((_) => (
                <p>*</p>
              ))}
          </div>
          <div className="product_image">
            <img src={props.image3} alt="" />
          </div>
          <button className="bttn">
            <Link to="checkout">Add to cart</Link>
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="product-title">{props.title4}</h5>
          <h3 className="product_price">
            <small>$</small>
            <strong>{props.price4}</strong>
          </h3>
          <div className="product_rating">
            {Array(props.rating4)
              .fill()
              .map((_) => (
                <p>*</p>
              ))}
          </div>
          <div className="product_image">
            <img src={props.image4} alt="" />
          </div>
          <button className="bttn">
            <Link to="checkout">Add to cart</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item1;

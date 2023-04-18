import React from "react";
import { Link } from "react-router-dom";

function Item3(props) {
  return (
    <div>
      <div className="allproduct_one">
        <div className="card" width="300px">
          <div className="card-body">
            <h5 className="product-title">{props.title5}</h5>
            <h3 className="product_price">
              <small>$</small>
              <strong>{props.price5}</strong>
            </h3>
            <div className="product_rating">
              {Array(props.rating5)
                .fill()
                .map((_) => (
                  <p>*</p>
                ))}
            </div>
            <div className="product_image">
              <img src={props.image5} alt="" />
            </div>
            <button className="bttn">
              <Link to="checkout">Add to cart</Link>
            </button>
          </div>
        </div>
        <div className="card" width="300px">
          <div className="card-body">
            <h5 className="product-title">{props.title5}</h5>
            <h3 className="product_price">
              <small>$</small>
              <strong>{props.price5}</strong>
            </h3>
            <div className="product_rating">
              {Array(props.rating5)
                .fill()
                .map((_) => (
                  <p>*</p>
                ))}
            </div>
            <div className="product_image">
              <img src={props.image5} alt="" />
            </div>
            <button className="bttn">
              <Link to="checkout">Add to cart</Link>
            </button>
          </div>
        </div>
        <div className="card" width="300px">
          <div className="card-body">
            <h5 className="product-title">{props.title5}</h5>
            <h3 className="product_price">
              <small>$</small>
              <strong>{props.price5}</strong>
            </h3>
            <div className="product_rating">
              {Array(props.rating5)
                .fill()
                .map((_) => (
                  <p>*</p>
                ))}
            </div>
            <div className="product_image">
              <img src={props.image5} alt="" />
            </div>
            <button className="bttn">
              <Link to="checkout">Add to cart</Link>
            </button>
          </div>
        </div>
        <div className="card" width="300px">
          <div className="card-body">
            <h5 className="product-title">{props.title5}</h5>
            <h3 className="product_price">
              <small>$</small>
              <strong>{props.price5}</strong>
            </h3>
            <div className="product_rating">
              {Array(props.rating5)
                .fill()
                .map((_) => (
                  <p>*</p>
                ))}
            </div>
            <div className="product_image">
              <img src={props.image5} alt="" />
            </div>
            <button className="bttn">
              <Link to="checkout">Add to cart</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item3;

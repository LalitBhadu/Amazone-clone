import React, { useContext } from "react";
import "./Item.css";
import { StateContext } from "../createContext";

function Item(props) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("first");
  const manish = useContext(StateContext);
  console.log(manish);

  const addToBasket = () => {
    //add item in to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: props.title,
        price: props.price,
        rating: props.rating,
        image: props.image,
      },
    });
  };

  return (
    <div className="all_products">
      <div className="card">
        <div className="card-body">
          <h5 className="product-title">{props.title}</h5>
          <h3 className="product_price">
            <small>$</small>
            <strong>{props.price}</strong>
          </h3>
          <div className="product_rating">
            {Array(props.rating)
              .fill()
              .map((_) => (
                <p>*</p>
              ))}
          </div>
          <div className="product_image">
            <img src={props.image} alt="" />
          </div>
          <button className="bttn">Add to cart</button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="product-title">{props.title1}</h5>
          <h3 className="product_price">
            <small>$</small>
            <strong>{props.price1}</strong>
          </h3>
          <div className="product_rating">
            {Array(props.rating1)
              .fill()
              .map((_) => (
                <p>*</p>
              ))}
          </div>
          <div className="product_image">
            <img src={props.image1} alt="" />
          </div>
          <button className="bttn" onClick={basket?.addToBasket}>
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}
export default Item;

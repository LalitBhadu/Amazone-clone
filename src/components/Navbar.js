import React from "react";
import "./Navbar.css";
import { AiOutlineAmazon, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { useStateValue } from "../StateProvider";

function Navbar() {
  // const [{ basket }] = useStateValue();
  // console.log(basket);
  return (
    <>
      <nav className="Navbar">
        <div className="d-flex" role="search">
          <Link to="/">
            <AiOutlineAmazon className="logo" />
          </Link>

          <input
            className="searchform"
            type="search"
            placeholder="Search hear"
            aria-label="Search"
          />
          <button className="btn" type="submit">
            Search
          </button>
        </div>
        <div className="nav_menu">
          <div className="nav_option">
            <span className="nav_Lineone">Hello</span>
            <span className="nav_Linetwo">
              <strong>SIGN IN</strong>
            </span>
          </div>
          <div className="nav_option">
            <span className="nav_Lineone">Return</span>
            <span className="nav_Linetwo">
              <strong>& orders</strong>
            </span>
          </div>

          <div className="nav_option">
            <span className="nav_Lineone">Your</span>
            <span className="nav_Linetwo">
              <strong>Prime</strong>
            </span>
          </div>
          <div className="nav_cart"></div>
          <AiOutlineShoppingCart />
          {/* <span className="no_item">{basket?.lenght}</span> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

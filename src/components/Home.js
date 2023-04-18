import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <>
      <Navbar />
      <div className="homepage">
        <img className="banner" src="banner.jpg" alt="" />
      </div>
      <Product />
    </>
  );
}

export default Home;

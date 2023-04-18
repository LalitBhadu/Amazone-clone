import React from "react";
import "./Product.css";
import Item from "./Item";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";

function Product() {
  return (
    <>
      <Item
        id={1}
        title="PIKASOW PAINTING"
        image="item2.jpg"
        price={75}
        rating={5}
        id1={2}
        title1="LALIT PAINTING"
        image1="item3.jpg"
        price1={90}
        rating1={2}
      />

      <Item1
        id2={3}
        title2="ANKIT PAINTING"
        image2="item3.jpg"
        price2={85}
        rating2={1}
        id3={3}
        title3="SUMIT PAINTING"
        image3="item3.jpg"
        price3={55}
        rating3={4}
        id4={4}
        title4="SATISH PAINTING"
        image4="item3.jpg"
        price4={45}
        rating4={5}
      />
      <Item2
        id5={5}
        title5="RAHUL PAINTING"
        image5="item3.jpg"
        price5={145}
        rating5={5}
      />
      <Item3
        id5={5}
        title5="RAHUL PAINTING"
        image5="item3.jpg"
        price5={145}
        rating5={5}
      />
    </>
  );
}

export default Product;

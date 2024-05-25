import React from "react";
import "../HotProducts/HotProduct.css";
import ProductCard from "../ProductCard/ProductCard";
import proimgone from "../HotProducts/assets/productimageone.webp";
import proimgtwo from "../HotProducts/assets/productimagetwo.webp";
import proimgthree from "../HotProducts/assets/productimagethree.webp";
import proimgfour from "../HotProducts/assets/product.png";
import proimgfive from "../HotProducts/assets/productimagefive.png";
import proimgsix from "../HotProducts/assets/productimagesix.png";
import proimgseven from "../PVC-FLOORING/assests/productimages/floorp1.webp";
import proimgeight from "../PVC-FLOORING/assests/productimages/floorp7.webp";
import proimgnine from "../PVC-FLOORING/assests/productimages/floorp3.webp";

import { useNavigate } from "react-router-dom";


function HotProducts() {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo(0, 0);
    // Redirect to the next page when the card is clicked
    navigate("/productpage_10");
  };
  const handleClick1 = () => {
    window.scrollTo(0, 0);
    // Redirect to the next page when the card is clicked
    navigate("/productpage_11");
  };
  const handleClick2 = () => {
    window.scrollTo(0, 0);
    // Redirect to the next page when the card is clicked
    navigate("/productpage_17");
  };
  const handleClick3 = () => {
    window.scrollTo(0, 0);
    // Redirect to the next page when the card is clicked
    navigate("/productpage");
  };
  const handleClick4 = () => {
    window.scrollTo(0, 0);
    // Redirect to the next page when the card is clicked
    navigate("/productpage_3");
  };
  const handleClick5 = () => {
    window.scrollTo(0, 0);
    // Redirect to the next page when the card is clicked
    navigate("/productpage_2");
  };
  const handleClick6 = () => {
    window.scrollTo(0, 0);
    // Redirect to the next page when the card is clicked
    navigate("/productpage_19");
  };
  const handleClick7 = () => {
    window.scrollTo(0, 0);
    // Redirect to the next page when the card is clicked
    navigate("/productpage_25");
  };
  const handleClick8 = () => {
    window.scrollTo(0, 0);
    // Redirect to the next page when the card is clicked
    navigate("/productpage_25");
  };


   

  return (
    <div className="hot-products">
      <div className="hot-products-heading">
        <h1>Check Out Our Hot Products</h1>
      </div>
      <div className="hot-products-items">

        <div onClick={handleClick} style={{cursor: "pointer"}}>
        <ProductCard
          
          productimage={proimgone}
          productdescription="Chinese manufacturer providing high quality and stable price of PVC wall cladding"
        />
        </div>
        <div onClick={handleClick1} style={{cursor: "pointer"}}>
        <ProductCard
          productimage={proimgtwo}
          productdescription="Visionary_Products providing high quality and stable price of PVC wall cladding"
        />
        </div>
        <div onClick={handleClick2} style={{cursor: "pointer"}}>
        <ProductCard
          productimage={proimgthree}
          productdescription="Visionary_Products providing high quality and stable price of PVC wall cladding"
        />
        </div>
        <div onClick={handleClick3} style={{cursor: "pointer"}}>
        <ProductCard
          productimage={proimgfour}
          productdescription="Visionary_Products providing high quality and stable price of PVC Marble Sheet"
        />
        </div>
       <div onClick={handleClick4} style={{cursor: "pointer"}}>
       <ProductCard
          productimage={proimgfive}
          productdescription="Visionary_Products providing high quality and stable price of PVC Marble Sheet"
        />
       </div>
       <div onClick={handleClick5} style={{cursor: "pointer"}}>
       <ProductCard
          productimage={proimgsix}
          productdescription="Visionary_Products providing high quality and stable price of PVC Marble Sheet"
        />
       </div>
        <div onClick={handleClick6} style={{cursor: "pointer"}}>
        <ProductCard
          productimage={proimgseven}
          productdescription="Visionary_Products providing high quality and stable price of SPC Flooring"
        />
        </div>
       <div onClick={handleClick7} style={{cursor: "pointer"}}>
       <ProductCard
          productimage={proimgeight}
          productdescription="Visionary_Products providing high quality and stable price of SPC Flooring"
        />
       </div>
        <div onClick={handleClick8} style={{cursor: "pointer"}}>
        <ProductCard
          productimage={proimgnine}
          productdescription="Visionary_Products providing high quality and stable price of SPC Flooring"
        /> 
        </div>
       
      </div>
    </div>
  );
}

export default HotProducts;

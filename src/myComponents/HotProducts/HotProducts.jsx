import React from "react";
import "../HotProducts/HotProduct.css";
import ProductCard from "../ProductCard/ProductCard";
import proimgone from "../HotProducts/assets/productimageone.webp";
import proimgtwo from "../HotProducts/assets/productimagetwo.webp";
import proimgthree from "../HotProducts/assets/productimagethree.webp";
import proimgfour from "../HotProducts/assets/product.png";
import proimgfive from "../HotProducts/assets/productimagefive.png";
import proimgsix from "../HotProducts/assets/productimagesix.png";
import proimgseven from "../HotProducts/assets/productimageseven.webp";
import proimgeight from "../HotProducts/assets/productimageeight.webp";
import proimgnine from "../HotProducts/assets/productimagenine.webp";




function HotProducts() {


   

  return (
    <div className="hot-products">
      <div className="hot-products-heading">
        <h1>Check Out Our Hot Products</h1>
      </div>
      <div className="hot-products-items">
        <ProductCard
          productimage={proimgone}
          productdescription="Chinese manufacturer providing high quality and stable price of wpc wall cladding"
        />
        <ProductCard
          productimage={proimgtwo}
          productdescription="Visionary_Products providing high quality and stable price of wpc wall cladding"
        />
        <ProductCard
          productimage={proimgthree}
          productdescription="Visionary_Products providing high quality and stable price of wpc wall cladding"
        />
        <ProductCard
          productimage={proimgfour}
          productdescription="Visionary_Products providing high quality and stable price of wpc wall cladding"
        />
        <ProductCard
          productimage={proimgfive}
          productdescription="Visionary_Products providing high quality and stable price of wpc wall cladding"
        />
        <ProductCard
          productimage={proimgsix}
          productdescription="Visionary_Products providing high quality and stable price of wpc wall cladding"
        />
        <ProductCard
          productimage={proimgseven}
          productdescription="Visionary_Products providing high quality and stable price of wpc wall cladding"
        />
        <ProductCard
          productimage={proimgeight}
          productdescription="Visionary_Products providing high quality and stable price of wpc wall cladding"
        />
        <ProductCard
          productimage={proimgnine}
          productdescription="Visionary_Products providing high quality and stable price of wpc wall cladding"
        /> 
       
      </div>
    </div>
  );
}

export default HotProducts;

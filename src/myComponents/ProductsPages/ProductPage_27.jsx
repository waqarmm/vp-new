import React from 'react'
import productimage from "../PVC-FLOORING/assests/productimages/floorp9.webp";
import image1 from "../ProductsPages/assests/floorone.jpeg"
import image2 from "../ProductsPages/assests/floortwo.jpeg"
import image3 from "../ProductsPages/assests/floorthree.jpeg"
import image4 from "../appBar/assets/ware.png" 
import image5 from "../PVC-FLOORING/assests/productimages/made.webp" 
import "../ProductsPages/Productpage.css";

const ProductPage_27 = () => {
  return (
    <div className="product-page-sec">
      <div className="product-page">
        <div className="product-image">
          <img src={productimage} alt="" />
        </div>
        <div className="product-name">
          <h1>product name Lorem, ipsum dolor sit amet </h1>
          <p>
            product detail Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. amet, consectetur aorem ipsum dolor sit amet, consectetur
            adipisicing elit. amet, consectetur adipisicing elit. orem ipsum
            dolor sit amet, consectetur adipisicing elit. amet, consectetur
            adipisicing elit. dipisicing elit. !
          </p>
        </div>
      </div>
      <div className="product-des">
        <div className="pro-content">
          <h2>Introduction to outdoor wall panels</h2>
          <p>
            Outdoor wall panels is an excellent choice for homeowners and
            builders who want to create stunning and durable exterior finishes
            for homes and commercial buildings. Designed for use in outdoor
            environments, these panels offer many advantages over traditional
            building materials.
          </p>
          <h2>Advantages of outdoor wall panels</h2>
          <p>
            One of the biggest advantages of outdoor wall panel is its
            durability. These panels are made from high-quality materials that
            are resistant to weathering and UV radiation, making them ideal for
            use in outdoor environments. They are also highly resistant to
            moisture, which can cause rot and rot in other building materials. <br/> <br/><br/> <br/>
            Another advantage of outdoor wall panel is its versatility. They
            come in a variety of colors, finishes and textures, allowing you to
            create a unique look that complements the architecture and style of
            your building. Additionally, they can be customized to fit almost
            any building design and size, giving you endless design options. One
            of the best features of these panels is the ease of installation.<br/> <br/><br/> <br/>
            They can be installed quickly and efficiently, saving you time and
            labor costs. They are lightweight and easy to transport and handle
            on site. In addition, outdoor wall panel has excellent thermal
            properties, keeping buildings warm in the winter and cool in the
            summer, thus reducing energy costs.<br/> <br/><br/> <br/> They are also fire-resistant,
            helping to protect buildings from wildfires and other potential
            hazards. Overall, with its durability, versatility, and ease of
            installation, outdoor wall panel is an excellent choice for
            architects, builders, and homeowners looking for a long-lasting and
            stunning look for their buildings.
          </p> <h2>Introductio to outdoor wall panels</h2>
          <p>
            Outdoor wall panels is an excellent choice for homeowners and
            builders who want to create stunning and durable exterior finishes
            for homes and commercial buildings. Designed for use in outdoor
            environments, these panels offer many advantages over traditional
            building materials.
          </p>
          {/* <h2>Advantages of outdoor wall panels</h2> */}
          {/* <p>
            Outdoor wall panels is an excellent choice for homeowners and
            builders who want to create stunning and durable exterior finishes
            for homes and commercial buildings. Designed for use in outdoor
            environments, these panels offer many advantages over traditional
            building materials.
          </p> <h2>Advantages of outdoor wall panels</h2>
          <p> */}
            {/* Outdoor wall panels is an excellent choice for homeowners and
            builders who want to create stunning and durable exterior finishes
            for homes and commercial buildings. Designed for use in outdoor
            environments, these panels offer many advantages over traditional
            building materials.
          </p> */}
        </div>
        <div className="pro-con-images">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" /> 
        </div>
      </div>
      <div className="product-detail-image">
        <h2>installation</h2>
        <img src={image5} alt="" />
        <img src={image4} alt="" />  
        <h2>colors</h2>
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <h2>decoration</h2>
        <img src={image2} alt="" />
        <img src={image1} alt="" /> 
      </div>
    </div>
  )
}

export default ProductPage_27
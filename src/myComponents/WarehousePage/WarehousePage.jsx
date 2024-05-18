import React from "react";
import "../WarehousePage/WarehousePage.css"
import visitBanner from "../WarehousePage/assets/visit.jpeg";
import show1 from "../WarehousePage/assets/show1.jpeg";
import show2 from "../WarehousePage/assets/show2.jpeg";
import show3 from "../WarehousePage/assets/show3.jpeg";
import g1 from "../WarehousePage/assets/g1.jpeg";
import g2 from "../WarehousePage/assets/g2.jpeg";
import g3 from "../WarehousePage/assets/g3.jpeg";
import g4 from "../WarehousePage/assets/g4.jpeg";
import g5 from "../WarehousePage/assets/g5.jpeg";
import g6 from "../WarehousePage/assets/g6.jpeg";
import g7 from "../WarehousePage/assets/g7.jpeg";
import g8 from "../WarehousePage/assets/g8.jpeg";
import Footer from "../footer";
function WarehousePage() {
   
  return (
    <>
      <div className="warehouse-page">
        <div className="warehouse-banner">
          <div className="warehouse-banner-content">
            <div className="warehouse-banner-text">
              <h1>Welcome to Our Warehouse</h1>
              <p>
                Discover the ultimate destination for all your interior needs.
                We offer a wide selection of high-quality panels, stylish
                flooring options, and elegant marble sheets, providing
                everything you need to create beautiful and durable spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
      <>
        {" "}
        <div className="gallery-section-head">
          <h1>Discover Our Quality and Variety</h1>
          <p>
            Step into our showroom and explore a world of high-quality PVC
            products designed to enhance your spaces with elegance and
            durability.
          </p>
        </div>
        <div className="gallery-section">
          <div className="gallery1">
            <div className="gallery1-images">
              <img src={g1} alt="" />
              <img src={g2} alt="" />
              <img src={g3} alt="" />
              <img src={g4} alt="" />
            </div>
            <div className="gallery1-text">
              <h3>A Glimpse into Our Warehouse</h3>
              <p>
                Explore Our Product Range Discover a wide selection of our PVC
                products, including the latest designs in marble sheets, wall
                panels, and flooring. We take pride in maintaining a
                well-stocked inventory that showcases the most current trends.
                Whether you are seeking inspiration or ready to make a purchase,
                our extensive collection is sure to meet your needs and exceed
                your expectations.
              </p>
            </div>
          </div>
          <div className="gallery2">
            {" "}
            <div className="gallery2-images">
              <img src={g5} alt="" />
              <img src={g6} alt="" />
              <img src={g7} alt="" />
              <img src={g8} alt="" />
            </div>
            <div className="gallery2-text">
              <h3>Explore Our Facilities</h3>
              <p>
                Explore Our Product Range Discover a wide selection of our PVC
                products, including the latest designs in marble sheets, wall
                panels, and flooring. We take pride in maintaining a
                well-stocked inventory that showcases the most current trends.
                Whether you are seeking inspiration or ready to make a purchase,
                our extensive collection is sure to meet your needs and exceed
                your expectations.
              </p>
            </div>
          </div>
        </div>
      </>

      {/* visit-showroom section  */}
      <div className="visit-showroom-sec">
        <h1>Visit our showroom</h1>
        <div className="visit-showroom-img">
          <img src={visitBanner} alt="asdfghj" />
        </div>
        <div className="visit-showroom-cards">
          <div className="showroom-card1">
            <div className="card1-img">
              <img src={show1} alt="card1" />
            </div>
            <div className="card1-text">
              <h2>Discover Our Showroom</h2>
              <p>
                Step into our showroom and explore our high-quality PVC marble
                sheets, wall panels, and flooring. Our office, proudly featuring
                our company banner, offers a welcoming and professional
                environment. Our dedicated team is always ready to assist you in
                finding the perfect materials for your projects. Experience the
                innovation and quality that set us apart.
              </p>
            </div>
          </div>
          <div className="showroom-card2">
            <div className="card2-img">
              <img src={show3} alt="" />
            </div>
            <div className="card2-text">
              <h2>Explore Our Product Range</h2>
              <p>
                Discover a wide selection of our PVC products, including the
                latest designs in marble sheets, wall panels, and flooring. We
                take pride in maintaining a well-stocked inventory that
                showcases the most current trends. Whether you are seeking
                inspiration or ready to make a purchase, our extensive
                collection is sure to meet your needs and exceed your
                expectations.
              </p>
            </div>
          </div>
          <div className="showroom-card3">
            <div className="card3-img">
              <img src={show2} alt="" />
            </div>
            <div className="card3-text">
              <h2>Visit and Be Inspired</h2>
              <p>
                Experience the elegance and practicality of our PVC products in
                our beautifully designed showroom. See firsthand how our
                materials can transform any space with their aesthetic appeal
                and versatility. Our showroom is designed to inspire, helping
                you visualize the potential of our products in your own home or
                office.  
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default WarehousePage;

 
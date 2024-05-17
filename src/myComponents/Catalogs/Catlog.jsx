import React from "react";
import "../Catalogs/Catlog.css";
import { useNavigate } from "react-router-dom";
import ImgOne from "../Catalogs/assets/PVCFloor.jpg";
import ImgTwo from "../Catalogs/assets/PVCMarble.jpg";
import ImgThree from "../Catalogs/assets/PVCWall.jpg";

const Cards = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Redirect to the next page when the card is clicked
    navigate ("/slider");
  };
  const handleClicked = () => {
    // Redirect to the next page when the card is clicked
    navigate ("/WPC-Flooring");
  };
  const handleClickes = () => {
    // Redirect to the next page when the card is clicked
    navigate ("/WPC-WallPanels");
  };

  return ( 
      <div className="catlog-container">
        <div className="catlog-heading">
          <h1>Transforming Spaces with Timeless Elegance</h1>
        </div>
        <div className="card-container">
          <div className="cards-box">
            {/* Card 1 */}
            <div className="first-card" onClick={handleClick}>
              <img src={ImgTwo} alt="Image 1" />
              <p> PVC Marble Sheets</p>
            </div>
            <div className="cards-right">
              {/* Card 2 */}
              <div className="card-two" onClick={handleClickes}>
                <img src={ImgThree} alt="Image 2" />
                <p>PVC Wall  Panels  for  Every   Vision </p>
              </div>

              {/* Card 3 */}
              <div className="card-three" onClick={handleClicked}>
                <img src={ImgOne} alt="Image 3" />
                <p>PVC Flooring, Where Comfort Meets Durability </p>
              </div>
 
            </div>
          </div>
        </div>
      </div> 
  );
};

export default Cards;
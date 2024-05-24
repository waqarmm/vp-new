// import React from "react";
// import "../Slider-details/SliderCard.css";

// const Slidercard = (props) => {
//   return (
//     <div className="product-card2">
//       <div className="pro-card-img2">
//         <img src={props.Cardimage} alt="Card" />
//       </div>

//       <div className="pro-card-text2">
//         <p>{props.productCardDescription}</p>
//       </div>
//     </div>
//   );
// };

// export default Slidercard;
import React from "react";
import "../Slider-details/SliderCard.css";

const Slidercard = ({ Cardimage, productCardDescription, onClick }) => {
  return (
    <div  onClick={onClick} className="product-card2">
      <div className="pro-card-img2">
        <img src={ Cardimage} alt="Card" />
      </div>

      <div className="pro-card-text2">
        <p>{productCardDescription}</p>
      </div>
    </div>
  );
};

export default Slidercard;

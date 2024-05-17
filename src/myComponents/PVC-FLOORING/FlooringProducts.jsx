import React from 'react'
import "../PVC-FLOORING/FlooringProducts.jsx"

const FlooringProducts = (props) => {
  return (
    <div className="product-card2">
    <div className="pro-card-img2">
      <img src={props.Cardimage} alt="Card" />
    </div>

    <div className="pro-card-text2">
      <p>{props.productCardDescription}</p>
    </div>
  </div>
  )
}

export default FlooringProducts
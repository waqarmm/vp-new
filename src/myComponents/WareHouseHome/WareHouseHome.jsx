import React from "react";
import "../WareHouseHome/WareHouseHome.css"; 
import { useNavigate } from "react-router-dom";

function WarehouseHome() {
  const navigate = useNavigate();

  const handleClick00 = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Redirect to the next page
    navigate("/warehouse-page");
  };

  return (
    <div className="warehouse-home-container">
      <div className="warehouse-home">
        <div className="warehouse-home-content">
          <h1>Welcome to Our Warehouse</h1>
          <p>
            Your one-stop shop for <span className="highlight">PANEL</span>,{" "}
            <span className="highlight">FLOORING</span>, and{" "}
            <span className="highlight">MARBLE SHEET</span>.
          </p>
          <button onClick={handleClick00}>View Details</button>
        </div>
      </div>
    </div>
  );
}

export default WarehouseHome;

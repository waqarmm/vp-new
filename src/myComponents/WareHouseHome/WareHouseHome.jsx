import React from "react";
import "../WareHouseHome/WareHouseHome.css";

function WarehouseHome() {
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
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
}

export default WarehouseHome;
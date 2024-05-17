import React from "react";

import Footer from "../footer";
// import FAQ from "../FAQ";
import AnnouncementBar from "../Annoucement-bar/AnnouncementBar";
import Catlog from "../Catalogs/Catlog";
import HotProducts from "../HotProducts/HotProducts";
import Whyvp from "../WhyVp/WhyVp"; 
import WarehouseHome from "../WareHouseHome/WareHouseHome";
// import Slider from "../Slider-details/Slider";





const Home = () => {
  return (
    <div>
      <AnnouncementBar /> 
      <div className="conatiner" style={{ width: "90%", margin: "0px auto" }}>
        <Catlog />
        {/* <Slider/> */}
        <HotProducts />
        <Whyvp /> 
        {/* <FAQ /> */}
      </div>
      {/* <div>
          <a href="https://wa.me/923555072977?text=hey! how can i help you?" target="blank">
            <img src={WhatsApp} alt="xcv" />
          </a>
        </div> */}

            <WarehouseHome/>
      <Footer />
 
    </div>
  );
};

export default Home;

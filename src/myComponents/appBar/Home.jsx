import React from "react";

import Footer from "../footer";
// import FAQ from "../FAQ";
import AnnouncementBar from "../Annoucement-bar/AnnouncementBar";
import Catlog from "../Catalogs/Catlog";
import HotProducts from "../HotProducts/HotProducts";
import Whyvp from "../WhyVp/WhyVp";
import Visit from "../VisitOurShowroom/visit";
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
        <Visit />
        {/* <FAQ /> */}
      </div>
      <Footer />
 
    </div>
  );
};

export default Home;

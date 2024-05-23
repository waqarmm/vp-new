import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./myComponents/appBar/Navbar";
import Home from "./myComponents/appBar/Home";
// import IndoorProducts from './myComponents/appBar/IndoorProducts';
import WPCWallPanel from "./myComponents/appBar/MarbleSheet";
import WPCFlatPanel from "./myComponents/appBar/WPCFlooring";
import WPCTimberTube from "./myComponents/appBar/WPCPanels";
import AboutUs from "./myComponents/appBar/AboutUs";
import ContactUs from "./myComponents/appBar/ContactUs";
import Slider from "./myComponents/Slider-details/Slider";
import WarehousePage from "./myComponents/WarehousePage/WarehousePage";
import Productpage from "./myComponents/ProductsPages/Productpage";
import ProductPage_1 from "./myComponents/ProductsPages/ProductPage_1";
import ProductPage_2 from "./myComponents/ProductsPages/ProductPage_2";
import ProductPage_3 from "./myComponents/ProductsPages/ProductPage_3";
import ProductPage_4 from "./myComponents/ProductsPages/ProductPage_4";
import ProductPage_5 from "./myComponents/ProductsPages/ProductPage_5";
import ProductPage_7 from "./myComponents/ProductsPages/ProductPage_7";
import ProductPage_8 from "./myComponents/ProductsPages/ProductPage_8";
import ProductPage_9 from "./myComponents/ProductsPages/ProductPage_9";
import ProductPage_10 from "./myComponents/ProductsPages/ProductPage_10";
import ProductPage_11 from "./myComponents/ProductsPages/ProductPage_11";
import ProductPage_12 from "./myComponents/ProductsPages/ProductPage_12";
import ProductPage_13 from "./myComponents/ProductsPages/ProductPage_13";
import ProductPage_14 from "./myComponents/ProductsPages/ProductPage_14";
import ProductPage_15 from "./myComponents/ProductsPages/ProductPage_15";
import ProductPage_16 from "./myComponents/ProductsPages/ProductPage_16";
import ProductPage_17 from "./myComponents/ProductsPages/ProductPage_17";
import ProductPage_18 from "./myComponents/ProductsPages/ProductPage_18";
import ProductPage_19 from "./myComponents/ProductsPages/ProductPage_19";
import ProductPage_20 from "./myComponents/ProductsPages/ProductPage_20";
import ProductPage_21 from "./myComponents/ProductsPages/ProductPage_21";
import ProductPage_22 from "./myComponents/ProductsPages/ProductPage_22";
import ProductPage_23 from "./myComponents/ProductsPages/ProductPage_23";
import ProductPage_24 from "./myComponents/ProductsPages/ProductPage_24";
import ProductPage_25 from "./myComponents/ProductsPages/ProductPage_25";
import ProductPage_26 from "./myComponents/ProductsPages/ProductPage_26";
import ProductPage_27 from "./myComponents/ProductsPages/ProductPage_27";





const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Marble-Sheets" element={<WPCWallPanel />} />
            <Route path="/WPC-WallPanels" element={<WPCTimberTube/>} />
            <Route path="/WPC-Flooring" element={< WPCFlatPanel/>} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/warehouse-page" element={<WarehousePage/>}/>
            <Route path="/productpage" element={<Productpage/>}/>
            <Route path="/productpage_1" element={<ProductPage_1/>}/>
            <Route path="/productpage_2" element={<ProductPage_2/>}/>
            <Route path="/productpage_3" element={<ProductPage_3/>}/>
            <Route path="/productpage_4" element={<ProductPage_4/>}/>
            <Route path="/productpage_5" element={<ProductPage_5/>}/>
            <Route path="/productpage_7" element={<ProductPage_7/>}/>
            <Route path="/productpage_8" element={<ProductPage_8/>}/>
            <Route path="/productpage_9" element={<ProductPage_9/>}/>
            <Route path="/productpage_10" element={<ProductPage_10/>}/>
            <Route path="/productpage_11" element={<ProductPage_11/>}/>
            <Route path="/productpage_12" element={<ProductPage_12/>}/>
            <Route path="/productpage_13" element={<ProductPage_13/>}/>
            <Route path="/productpage_14" element={<ProductPage_14/>}/>
            <Route path="/productpage_15" element={<ProductPage_15/>}/>
            <Route path="/productpage_16" element={<ProductPage_16/>}/>
            <Route path="/productpage_17" element={<ProductPage_17/>}/>
            <Route path="/productpage_18" element={<ProductPage_18/>}/>
            <Route path="/productpage_19" element={<ProductPage_19/>}/>
            <Route path="/productpage_20" element={<ProductPage_20/>}/>
            <Route path="/productpage_21" element={<ProductPage_21/>}/>
            <Route path="/productpage_22" element={<ProductPage_22/>}/>
            <Route path="/productpage_23" element={<ProductPage_23/>}/>
            <Route path="/productpage_24" element={<ProductPage_24/>}/>
            <Route path="/productpage_25" element={<ProductPage_25/>}/>
            <Route path="/productpage_26" element={<ProductPage_26/>}/>
            <Route path="/productpage_27" element={<ProductPage_27/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;

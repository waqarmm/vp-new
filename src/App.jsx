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
            {/* <Route path="/products" element={<Products />} /> */}
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/slider" element={<Slider />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;

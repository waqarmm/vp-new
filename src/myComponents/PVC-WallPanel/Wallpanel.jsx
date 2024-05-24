import React from 'react';
import "../PVC-FLOORING/Flooring.css";
// products images

import proimgone from "../PVC-WallPanel/assets/panelProducts/panel1.webp";
import proimgtwo from "../PVC-WallPanel/assets/panelProducts/panel2.webp";
import proimgthree from "../PVC-WallPanel/assets/panelProducts/panel3.webp";
import proimgfour from "../PVC-WallPanel/assets/panelProducts/panel4.webp";
import proimgfive from "../PVC-WallPanel/assets/panelProducts/panel5.webp";
import proimgsix from "../PVC-WallPanel/assets/panelProducts/panel6.webp";
import proimgseven from "../PVC-WallPanel/assets/panelProducts/panel7.webp";
import proimgeight from "../PVC-WallPanel/assets/panelProducts/panel1.webp";
import proimgnine from "../PVC-WallPanel/assets/panelProducts/panel8.webp";

//head images

import ImgOne from "../PVC-WallPanel/assets/panel1.png";
import ImgTwo from "../PVC-WallPanel/assets/panel2.png";
import ImgThree from "../PVC-WallPanel/assets/panel3.png";
// import FlooringProducts from "../Slider-details/FlooringProducts";
import AnnouncementBar from "../Annoucement-bar/AnnouncementBar";
import Patterns from "../Pattrens/Patterns";

//last images
import lastimgone from "../PVC-WallPanel/assets/productsimg/wall1.jpg";
import lastimgtwo from "../PVC-WallPanel/assets/productsimg/wall2.jpg";
import lastimgthree from "../PVC-WallPanel/assets/productsimg/wall3.jpg";
import lastimgfour from "../PVC-WallPanel/assets/productsimg/wall4.jpg";
import lastimgfive from "../PVC-WallPanel/assets/productsimg/wall5.jpg";
import lastimgsix from "../PVC-WallPanel/assets/productsimg/wall6.jpg";
import Footer from "../footer";
import FAQ from "../FAQ";
import FlooringProducts from "../PVC-FLOORING/FlooringProducts";

const Wallpanel = (props) => {
  return (
    <>
      <AnnouncementBar />
      <div className="catlog-containeronee">
        <div className="catlog-heading2e">
          <h1>{props.head}</h1>
        </div>
        <div className="card-container2e">
          <div className="cards-box2e">
            {/* Card 1 */}
            <div className="first-card2e">
              <img src={ImgTwo} alt="Image 1" />
              {/* <p> PVC Marble Sheets →</p> */}
            </div>
            <div className="cards-right2e">
              {/* Card 2 */}
              <div className="card-two2e">
                <img src={ImgThree} alt="Image 2" />
                {/* <p>PVC Wall  Panels  for  Every   Vision  →</p> */}
              </div>

              {/* Card 3 */}
              <div className="card-three2e">
                <img src={ImgOne} alt="Image 3" />
                {/* <p>PVC Flooring, Where Comfort Meets Durability →</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed-text">
        <h3 className="h1">THE ELEGANT WALL-PANELS PATTERN</h3>
        <p
          style={{
            padding: "15px",
            fontSize: "20px",
            lineHeight: "30px",
            fontFamily: "sans-serif",
            fontStretch: "condensed",
            fontWeight: "lighter",
          }}
        >
          The SPC wall panels provides clean lines and therefore provides a modern
          look <div className="br"></div> The lanes emphasize the length of the
          space. This elegant pattern is a relief for the eye and an experience
          in <br /> the room.
        </p>
      </div>
      <div className="hot-products2e">
        <div className="hot-products-heading2e">
          <h1>VIEW OUR STYLISH CUSTOM WALL-PANELS</h1>
          <p className="p">
            We have the PVC Wall-panels available in various widths, lengths and at
            2 different angles. All in 90 different colors so that there are
            options for everyone. Would you like to come by for interior advice?
          </p>
        </div>
        <div className="catlog-containeronee">
          <div className="hot-products-items2e">
            <FlooringProducts
              Cardimage={proimgone}
              productCardDescription={
                "Click-lock Easy installation wall-panel"
              }
            />
            <FlooringProducts
              Cardimage={proimgtwo}
              productCardDescription={
                "Waterproof PVC Wall-panel"
              }
            />
            <FlooringProducts
              Cardimage={proimgthree}
              productCardDescription={
                "Stone plastic composite PVC Wall-panel"
              }
            />
            <FlooringProducts
              Cardimage={proimgfour}
              productCardDescription={
                "Rigid core PVC Wall-panel"
              }
            />
            <FlooringProducts
              Cardimage={proimgfive}
              productCardDescription={
                "PVC Wall-panel "
              }
            />
            <FlooringProducts
              Cardimage={proimgsix}
              productCardDescription={
                "PVC Wall-Panel "
              }
            />
            <FlooringProducts
              Cardimage={proimgseven}
              productCardDescription={
                "Luxury vinyl PVC Wall-Panel"
              }
            />
            <FlooringProducts
              Cardimage={proimgeight}
              productCardDescription={
            "Click-lock Easy installation PVC Wall-Panel."
              }
            />
            <FlooringProducts
              Cardimage={proimgnine}
              productCardDescription={
                "PVC Wall-panel "
              }
            />
          </div>
        </div>
      </div>

      <div className="catlog-containeronee">
        <Patterns
          patternHeading="WALL-PANELS PATTERN DECORATION PHOTOS"
          patternHeadDes="From sophisticated narrow planks to bold wide planks,Marble  add timeless elegance and contemporary grandeur to any space.From sophisticated narrow planks to bold wide planks,In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating Chevron pattern floors add timeless elegance and contemporary grandeur to any space"
          patternOneImage={lastimgone}
          patternOneHead="HISTORIC BUILDING - PVC WALL-PANEL"
          patternOneDes="In this partly modernized historic building the client opted for a spacious, PVC Wall-Panel with underfloor heating .In this partly modernized historic building the client opted for a spacious, PVC Wall-Panel with underfloor heating"
          patternTwoImage={lastimgtwo}
          patternTwoHead="HISTORIC BUILDING - PVC WALL-PANEL"
          patternTwoDes="In this partly modernized historic building the client opted for a spacious, PVC Wall-Panel with underfloor heating In this partly modernized historic building the client opted for a spacious, PVC Wall-Panel with underfloor heating."
          patternThreeImage={lastimgthree}
          patternThreeHead="HISTORIC BUILDING - PVC WALL-PANEL"
          patternThreeDes="In this partly modernized historic building the client opted for a spacious, PVC Wall-Panel with underfloor heating In this partly modernized historic building the client opted for a spacious, PVC Wall-Panel with underfloor heating ."
          patternFourImage={lastimgfour}
          patternFourHead="HISTORIC BUILDING - PVC WALL-PANEL"
          patternFourDes="In this partly modernized historic building the client opted for a spacious, PVC Wall-Panel with underfloor heatingIn this partly modernized historic building the client opted for a spacious, PVC Wall-Panel with underfloor heating ."
          patternFiveImage={lastimgfive}
          patternFiveHead="HISTORIC BUILDING - PVC WALL-PANEL"
          patternFiveDes="In this partly modernized historic building the client opted for a spacious, PVC Wall-Panel with underfloor heating In this partly modernized historic building the client opted for a spacious, PVC Wall-Panel with underfloor heating."
          patternSixImage={lastimgsix}
          patternSixHead="HISTORIC BUILDING - PVC WALL-PANEL"
          patternSixDes="In this partly modernized historic building the client opted for a spacious, PVC Wall-Panel with underfloor heatingIn this partly modernized historic building the client opted for a spacious, PVC Wall-Panel with underfloor heating ."
        />
      </div>
      {/* <FAQ /> */}
      <Footer />
    </>
  )
}

export default Wallpanel
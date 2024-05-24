import React from "react";
import "../PVC-FLOORING/Flooring.css";
// products images
import proimgone from "../PVC-FLOORING/assests/productimages/floorp1.webp";
import proimgtwo from "../PVC-FLOORING/assests/productimages/floorp2.webp";
import proimgthree from "../PVC-FLOORING/assests/productimages/floorp3.webp";
import proimgfour from "../PVC-FLOORING/assests/productimages/floorp4.webp";
import proimgfive from "../PVC-FLOORING/assests/productimages/floorp5.webp";
import proimgsix from "../PVC-FLOORING/assests/productimages/floorp6.webp";
import proimgseven from "../PVC-FLOORING/assests/productimages/floorp7.webp";
import proimgeight from "../PVC-FLOORING/assests/productimages/floorp8.webp";
import proimgnine from "../PVC-FLOORING/assests/productimages/floorp9.webp";

//head images

import ImgOne from "../PVC-FLOORING/assests/floor1.png";
import ImgTwo from "../PVC-FLOORING/assests/floor2.png";
import ImgThree from "../PVC-FLOORING/assests/floor3.png";
//components
import Slidercard from "../Slider-details/Slidercard";
import AnnouncementBar from "../Annoucement-bar/AnnouncementBar";
import Patterns from "../Pattrens/Patterns";

//last images
import lastimgone from "../PVC-FLOORING/assests/decorimages/decor1.jpg";
import lastimgtwo from "../PVC-FLOORING/assests/decorimages/decor2.jpg";
import lastimgthree from "../PVC-FLOORING/assests/decorimages/decor3.jpg";
import lastimgfour from "../PVC-FLOORING/assests/decorimages/decor4.jpg";
import lastimgfive from "../PVC-FLOORING/assests/decorimages/decor5.jpg";
import lastimgsix from "../PVC-FLOORING/assests/decorimages/decor6.jpg";
import Footer from "../footer";
import FAQ from "../FAQ";
// import FlooringProducts from "./FlooringProducts";

const Flooring = (props) => {
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
        <h3 className="h1">THE ELEGANT SPC FLOORING PATTERN</h3>
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
          The SPC floor provides clean lines and therefore provides a modern
          look <div className="br"></div> The lanes emphasize the length of the
          space. This elegant pattern is a relief for the eye and an experience
          in <br /> the room.
        </p>
      </div>
      <div className="hot-products2e">
        <div className="hot-products-heading2e">
          <h1>VIEW OUR STYLISH CUSTOM SPC FLOORING</h1>
          <p className="p">
            We have the SPC Flooring available in various widths, lengths and at
             different angles. All in  different colors so that there are
            options for everyone. Would you like to come by for interior advice?
          </p>
        </div>
        <div className="catlog-containeronee">
          <div className="hot-products-items2e">
            <Slidercard
              Cardimage={proimgone}
              productCardDescription={
                "Click-lock Easy installation flooring"
              }
            />
            <Slidercard
              Cardimage={proimgtwo}
              productCardDescription={
                "Waterproof SPC Flooring"
              }
            />
            <Slidercard
              Cardimage={proimgthree}
              productCardDescription={
                "Stone plastic composite flooring"
              }
            />
            <Slidercard
              Cardimage={proimgfour}
              productCardDescription={
                "Rigid core flooring"
              }
            />
            <Slidercard
              Cardimage={proimgfive}
              productCardDescription={
                "SPC flooring "
              }
            />
            <Slidercard
              Cardimage={proimgsix}
              productCardDescription={
                "SPC flooring "
              }
            />
            <Slidercard
              Cardimage={proimgseven}
              productCardDescription={
                "Luxury vinyl flooring"
              }
            />
            <Slidercard
              Cardimage={proimgeight}
              productCardDescription={
            "Click-lock Easy installation flooring."
              }
            />
            <Slidercard
              Cardimage={proimgnine}
              productCardDescription={
                "SPC flooring "
              }
            />
          </div>
        </div>
      </div>

      <div className="catlog-containeronee">
        <Patterns
          patternHeading="FLOORING PATTERN DECORATION PHOTOS"
          patternHeadDes="From sophisticated narrow planks to bold wide planks,SPC FLOORING add timeless elegance and contemporary grandeur to any space.From sophisticated narrow planks to bold wide planks,In this partly modernized historic building the client opted for a spacious, SPC Flooring with underfloor heating Chevron pattern floors add timeless elegance and contemporary grandeur to any space"
          patternOneImage={lastimgone}
          patternOneHead="HISTORIC BUILDING - SPC FLOORING"
          patternOneDes="In this partly modernized historic building the client opted for a spacious, SPC Flooring with underfloor heating .In this partly modernized historic building the client opted for a spacious, SPC Flooring with underfloor heating"
          patternTwoImage={lastimgtwo}
          patternTwoHead="HISTORIC BUILDING - SPC FLOORING"
          patternTwoDes="In this partly modernized historic building the client opted for a spacious, SPC Flooring with underfloor heating In this partly modernized historic building the client opted for a spacious, SPC Flooring with underfloor heating."
          patternThreeImage={lastimgthree}
          patternThreeHead="HISTORIC BUILDING - SPC FLOORING"
          patternThreeDes="In this partly modernized historic building the client opted for a spacious, SPC Flooring with underfloor heating In this partly modernized historic building the client opted for a spacious, SPC Flooring with underfloor heating ."
          patternFourImage={lastimgfour}
          patternFourHead="HISTORIC BUILDING - SPC FLOORING"
          patternFourDes="In this partly modernized historic building the client opted for a spacious, SPC Flooring with underfloor heatingIn this partly modernized historic building the client opted for a spacious, SPC Flooring with underfloor heating ."
          patternFiveImage={lastimgfive}
          patternFiveHead="HISTORIC BUILDING - SPC FLOORING"
          patternFiveDes="In this partly modernized historic building the client opted for a spacious, SPC Flooring with underfloor heating In this partly modernized historic building the client opted for a spacious, SPC Flooring with underfloor heating."
          patternSixImage={lastimgsix}
          patternSixHead="HISTORIC BUILDING - SPC FLOORING"
          patternSixDes="In this partly modernized historic building the client opted for a spacious, SPC Flooring with underfloor heatingIn this partly modernized historic building the client opted for a spacious, SPC Flooring with underfloor heating ."
        />
      </div>
      {/* <FAQ /> */}
      <Footer />
    </>
  );
};

export default Flooring;

import React from "react";
import "../Slider-details/Slider.css";
import ImgOne from "../Slider-details/assests/marble/one.png";
// products images
import proimgone from "../Slider-details/assests/marbleProducts/imgone.png";
import proimgtwo from "../Slider-details/assests/marbleProducts/imgtwo.png";
import proimgthree from "../Slider-details/assests/marbleProducts/imgthree.png";
import proimgfour from "../Slider-details/assests/marbleProducts/imgfour.png";
import proimgfive from "../Slider-details/assests/marbleProducts/imgfive.png";
import proimgsix from "../Slider-details/assests/marbleProducts/imgsix.png";
import proimgseven from "../Slider-details/assests/marbleProducts/imgseven.png";
import proimgeight from "../Slider-details/assests/marbleProducts/imgeight.png";
import proimgnine from "../Slider-details/assests/marbleProducts/imgnine.png";

//head images
import ImgTwo from "../Slider-details/assests/marble/four.jpg";
import ImgThree from "../Slider-details/assests/marble/two.png";
import Slidercard from "./Slidercard";
import AnnouncementBar from "../Annoucement-bar/AnnouncementBar";
import Patterns from "../Pattrens/Patterns";

//last images
import lastimgone from '../Slider-details/assests/marbleProducts/one.webp'
import lastimgtwo from '../Slider-details/assests/marbleProducts/two.jpg'
import lastimgthree from '../Slider-details/assests/marbleProducts/three.webp'
import lastimgfour from '../Slider-details/assests/marbleProducts/four.webp'
import lastimgfive from '../Slider-details/assests/marbleProducts/five.webp'
import lastimgsix from '../Slider-details/assests/marbleProducts/six.webp'
import Footer from "../footer";
import FAQ from "../FAQ";

const Slider = (props) => {
  return (
    <>
      <AnnouncementBar />
      <div className="catlog-containerone">
        <div className="catlog-heading2">
          <h1>{props.head}</h1>
        </div>
        <div className="card-container2">
          <div className="cards-box2">
            {/* Card 1 */}
            <div className="first-card2">
              <img src={ImgTwo} alt="Image 1" />
              {/* <p> PVC Marble Sheets →</p> */}
            </div>
            <div className="cards-right2">
              {/* Card 2 */}
              <div className="card-two2">
                <img src={ImgThree} alt="Image 2" />
                {/* <p>PVC Wall  Panels  for  Every   Vision  →</p> */}
              </div>

              {/* Card 3 */}
              <div className="card-three2">
                <img src={ImgOne} alt="Image 3" />
                {/* <p>PVC Flooring, Where Comfort Meets Durability →</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed-text">
        <h3 className="h1">THE ELEGANT MARBLE PATTERN</h3>
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
          The Marbal floor provides clean lines and therefore provides a modern
          look <div className="br"></div> The lanes emphasize the length of the
          space. This elegant pattern is a relief for the eye and an experience
          in <br /> the room.
        </p>
      </div>
      <div className="hot-products2">
        <div className="hot-products-heading2">
          <h1>VIEW OUR STYLISH CUSTOM MARBLE</h1>
          <p className="p">
            We have the Marble floor available in various widths, lengths and
            at 2 different angles. All in 90 different colors so that there are
            options for everyone. Would you like to come by for interior advice?
          </p>
        </div>
        <div className="catlog-containerone" >
        <div className="hot-products-items2">
          <Slidercard
            Cardimage={proimgone}
            productCardDescription={
              "The Marbal floor provides clean lines and therefore provides a modern look"
            }
          />
          <Slidercard
            Cardimage={proimgtwo}
            productCardDescription={
              "The Marbal floor provides clean lines and therefore provides a modern look"
            }
          />
          <Slidercard
            Cardimage={proimgthree}
            productCardDescription={
              "The Marbal floor provides clean lines and therefore provides a modern look"
            }
          />
          <Slidercard
            Cardimage={proimgfour}
            productCardDescription={
              "The Marbal floor provides clean lines and therefore provides a modern look"
            }
          />
          <Slidercard
            Cardimage={proimgfive}
            productCardDescription={
              "The Marbal floor provides clean lines and therefore provides a modern look"
            }
          />
          <Slidercard
            Cardimage={proimgsix}
            productCardDescription={
              "The Marbal floor provides clean lines and therefore provides a modern look"
            }
          />
          <Slidercard
            Cardimage={proimgseven}
            productCardDescription={
              "The Marbal floor provides clean lines and therefore provides a modern look"
            }
          />
          <Slidercard
            Cardimage={proimgeight}
            productCardDescription={
              "The Marbal floor provides clean lines and therefore provides a modern look"
            }
          />
          <Slidercard
            Cardimage={proimgnine}
            productCardDescription={
              "The Marbal floor provides clean lines and therefore provides a modern look"
            }
          />
        </div>
        </div>
      </div>

      <div className="catlog-containerone">
        <Patterns
          patternHeading="MARBLE PATTERN DECORATION PHOTOS"
          patternHeadDes="From sophisticated narrow planks to bold wide planks,Marble  add timeless elegance and contemporary grandeur to any space.From sophisticated narrow planks to bold wide planks,In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating Chevron pattern floors add timeless elegance and contemporary grandeur to any space"
          patternOneImage={lastimgone}
          patternOneHead="HISTORIC BUILDING - NOBLE WHITE"
          patternOneDes="In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating .In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating"
          patternTwoImage={lastimgtwo}
          patternTwoHead="HISTORIC BUILDING - NOBLE WHITE"
          patternTwoDes="In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating."
          patternThreeImage={lastimgthree}
          patternThreeHead="HISTORIC BUILDING - NOBLE WHITE"
          patternThreeDes="In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating ."
          patternFourImage={lastimgfour}
          patternFourHead="HISTORIC BUILDING - NOBLE WHITE"
          patternFourDes="In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heatingIn this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating ."
          patternFiveImage={lastimgfive}
          patternFiveHead="HISTORIC BUILDING - NOBLE WHITE"
          patternFiveDes="In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating."
          patternSixImage={lastimgsix}
          patternSixHead="HISTORIC BUILDING - NOBLE WHITE"
          patternSixDes="In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heatingIn this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating ."
        />
      </div>
      <FAQ/>
      <Footer/>
    </>
  );
};

export default Slider;

import React from 'react'
// import { Card, CardContent, Typography } from "@mui/material";
import ImgOne from "../appBar/assets/imgo.jpg";
import ImgTwo from "../appBar/assets/imgtow.jpg";
import "../VisitOurShowroom/visit.css"

const visit = () => {
  return (
    <div className="container" style={{ width: "100%", margin: " 0px auto" }}>
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontWeight: "lighter",
              marginTop: "50px",
              fontFamily: " sans-serif",
              fontStretch: "extra-condensed",
            }}
          >
            VISIT OUR SHOWROOM
          </h1>
          <p
            style={{
              fontWeight: "lighter",
              marginTop: "20px",
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            
          </p>
          <div className="icon-card">
          <div className="icontact-card-one">
              <div style={{ height: "350px", overflow: "hidden" }}>
                <img
                  src={ImgOne}
                  alt="Contact"
                  style={{
                    marginTop: "30px",
                    height: "90%",
                    width: "90%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ flex: "1" }}>
              <div>
                  <h3 className="iyu">ALPHEN AAN DEN RIJN</h3>
                  <p>Euromarkt 113</p>
                  <p>Visit Us →</p>
                </div>
              </div>
            </div>

            <div className="icontact-card-one">
              <div style={{ height: "350px", overflow: "hidden" }}>
                <img
                  src={ImgTwo}
                  alt="Contact"
                  style={{
                    marginTop: "30px",
                    height: "90%",
                    width: "90%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ flex: "1" }}>
                <div>
                  <h3 className="iyu">ALPHEN AAN DEN RIJN</h3>
                  <p>Euromarkt 113</p>
                  <p>Visit Us →</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='aaa'></div>
      </div>

            
       
  )
}

export default visit
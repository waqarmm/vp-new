import React from "react";
import { CardContent, Typography } from "@mui/material";
import ImgOne from "../appBar/assets/imgo.jpg";
import ImgTwo from "../appBar/assets/imgtow.jpg";
import "../appBar/ContactUs.css";
import Footer from "../footer";
import FAQ from "../FAQ";
import AnnouncementBar from "../Annoucement-bar/AnnouncementBar";

const ContactUs = () => {
  return (
    <>
      <AnnouncementBar />
      <div className="container" style={{ width: "80%", margin: " 0px auto" }}>
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontWeight: "lighter",
              marginTop: "50px",
              fontFamily: " sans-serif",
              fontStretch: "extra-condensed",
            }}
          >
            CONTACT
          </h1>
          <p
            style={{
              fontWeight: "lighter",
              marginTop: "20px",
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Do you have questions? Call, email or visit us for a no-obligation
            consultation in one of our showrooms.
          </p>
          <div className="con-card">
          <div className="contact-card-one">
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
                  <h3 className="yu">farhan durrani designation</h3>
                  <p>+971-50-819-4493</p>
                  <p>visionarypartnersUAE.com</p>
                  <p>info@visionarypartnersUAE.com</p>
                  <p>Warehouse #45,Near China Mall Al jurf,Ajman,UAE</p>
                </div>
              </div>
            </div>

            <div className="contact-card-one">
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
                  <h3 className="yu">farhan durrani designation</h3>
                  <p>+971-50-819-4493</p>
                  <p>visionarypartnersUAE.com</p>
                  <p>info@visionarypartnersUAE.com</p>
                  <p>Warehouse #45,Near China Mall Al jurf,Ajman,UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <div className="aaa"></div>
      <Footer />
    </>
  );
};

export default ContactUs;

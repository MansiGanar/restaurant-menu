import React from "react";
import "./AboutUs.css";
import { images } from "../../constants";
import { Grid } from "@mui/material";

const AboutUs = () => {
  return (
    <div>
      <Grid container className="about_bg">
        <Grid item xs={5} sm={5}>
          <div
            className="app__aboutus-content_about"
            style={{
              textAlign: "end",
              padding: "5rem 0 0 3rem",
            }}
          >
            <h1 className="headtext__cormorant">About Us</h1>
            <img src={images.spoon} alt="about_spoon" className="spoon__img" />
            <p className="p__opensans" style={{ padding: "2rem 0" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <button
              style={{
                width: "6rem",
                height: "2rem",
                color: "black",
                background: "var(--color-golden)",
                cursor: "pointer",
              }}
              type="button"
              className="custom__button"
            >
              Know More
            </button>
          </div>
        </Grid>
        <Grid
          item
          xs={2}
          sm={2}
          style={{ textAlign: "center", padding: "auto" }}
        >
          <img className="knife_img" src={images.knife} alt="image of knife" />
        </Grid>
        <Grid
          item
          xs={5}
          sm={5}
          style={{ width: "20%", padding: "5rem 3rem 0 0" }}
        >
          <div className="app__history-content_about">
            <h1 className="headtext__cormorant">Our History</h1>
            <img src={images.spoon} alt="about_spoon" className="spoon__img" />
            <p className="p__opensans" style={{ padding: "2rem 0" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <button
              style={{
                width: "6rem",
                height: "2rem",
                color: "black",
                background: "var(--color-golden)",
                cursor: "pointer",
              }}
              type="button"
              className="custom__button"
            >
              Know More
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;

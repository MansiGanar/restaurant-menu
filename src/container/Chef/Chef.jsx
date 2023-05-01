import React from "react";
import "./Chef.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import { Grid, Typography } from "@mui/material";

const Chef = () => {
  return (
    <div>
      <Grid container style={{ marginTop: "4rem" }}>
        <Grid item xs={4} sm={4}>
          <img
            // style={{ margin: "auto" }}
            className="chef_img"
            src={images.chef}
            alt="Chef's image"
          />
        </Grid>
        <Grid
          item
          className="chef_main"
          xs={8}
          sm={8}
          style={{
            fontSize: "1rem",
            fontWeight: "500",
            color: "white",
          }}
        >
          <SubHeading title="Chef's Word" />
          <Typography
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "var(--color-golden)",
              fontFamily: "Sofia, sans-serif",
            }}
          >
            What We Believe In
          </Typography>
          <img
            style={{ padding: "2rem 1rem 0 0", marginTop: "2rem" }}
            className="quote_img"
            src={images.quote}
            alt="quote image"
          />
          <Typography
            style={{
              fontSize: "1rem",
              fontWeight: "500",
              color: "white",
              fontFamily: "Sofia, sans-serif",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>

          <Typography
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "var(--color-golden)",
              fontFamily: "Sofia, sans-serif",
              paddingTop: "2rem",
            }}
          >
            Kevin Luo
          </Typography>
          <Typography
            style={{
              fontSize: "1rem",
              fontWeight: "500",
              color: "white",
              fontFamily: "Sofia, sans-serif",
            }}
          >
            Chef & Founder
          </Typography>
          <img
            style={{ padding: "2rem 1rem 0 0" }}
            className="sign_img"
            src={images.sign}
            alt="chef's sign image"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Chef;

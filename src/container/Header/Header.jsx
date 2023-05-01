import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";
import { Grid } from "@mui/material";

const Header = () => {
  return (
    <div className="app__header app_wrapper section__padding" id="home">
      <Grid container>
        <Grid item sm={8} xs={6} lg={8}>
          <div className="app__wrapper_info">
            <SubHeading title="Chase the new flavour" />
            <h1 className="app__header-h1">The Key to Fine Dining </h1>
            <p className="p__opensans" style={{ padding: "2rem 0" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button
              className="custom__button"
              style={{
                width: "6rem",
                height: "2rem",
                color: "black",
                background: "var(--color-golden)",
                cursor: "pointer",
              }}
            >
              Explore Menu
            </button>
          </div>
        </Grid>

        <Grid item sm={4} xs={6} lg={4}>
          <div>
            <img
              className="app__wrapper_img"
              src={images.welcome}
              alt="header img"
              style={{ textAlign: "center" }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;

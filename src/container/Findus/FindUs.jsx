import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import { Grid, Typography } from "@mui/material";

const FindUs = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "2rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <Grid container>
          <Grid item md={6}>
            <SubHeading
              title="Contact"
              style={{
                color: "white",
                textAlign: "center",
                margin: "auto",
              }}
            />
            <Typography
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "var(--color-golden)",
                fontFamily: "Sofia, sans-serif",
                textAlign: "center",
                background: "black",
              }}
            >
              Find Us
            </Typography>
            <Typography
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                color: "white",
                fontFamily: "Sofia, sans-serif",
                background: "black",
                padding: "1rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </Typography>
            <Typography
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                color: "var(--color-golden)",
                fontFamily: "Sofia, sans-serif",
                background: "black",
              }}
            >
              Opening Hours
            </Typography>
            <Typography
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                color: "white",
                fontFamily: "Sofia, sans-serif",
                background: "black",
                padding: "0.5rem",
              }}
            >
              Mon-Fri :10;00 am - 02:00 am
            </Typography>
            <Typography
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                color: "white",
                fontFamily: "Sofia, sans-serif",
                background: "black",
                padding: "0.5rem",
              }}
            >
              Sat-Sun :10:00 am - 03:00 am
            </Typography>
            <button
              className="custom__button"
              style={{
                marginTop: "2rem",
                background: "var(--color-golden)",
                width: "20%",
                height: "2rem",
              }}
            >
              Visit Us
            </button>
          </Grid>
          <Grid item md={6}>
            <img src={images.findus} style={{ width: "50%" }} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FindUs;

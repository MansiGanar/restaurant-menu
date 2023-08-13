import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import { Grid, Typography } from "@mui/material";

const Gallery = () => {
  return (
    <div
      style={{
        marginTop: "2rem",
        textAlign: "center",
        color: "white",
        background: "black",
      }}
    >
      <Grid container>
        <Grid item md={4} padding={1}>
          <SubHeading
            title="Instagram"
            style={{
              color: "white",
              textAlign: "center",
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
            Photo Gallery
          </Typography>
          <Typography
            style={{
              fontSize: "1rem",
              fontWeight: "500",
              color: "white",
              fontFamily: "Sofia, sans-serif",
              background: "black",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </Typography>
        </Grid>
        <Grid item md={2}>
          <img src={images.gallery01} style={{ width: "80%" }} />
        </Grid>
        <Grid item md={2}>
          <img src={images.gallery02} style={{ width: "80%" }} />
        </Grid>
        <Grid item md={2}>
          <img src={images.gallery03} style={{ width: "80%" }} />
        </Grid>
        <Grid item md={2}>
          <img src={images.gallery04} style={{ width: "80%" }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Gallery;

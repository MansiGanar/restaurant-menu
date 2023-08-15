import React from "react";
import "./Laurels.css";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import { Grid, Typography } from "@mui/material";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <Grid container>
      <Grid item md={6} style={{ textAlign: "end" }}>
        <img
          src={imgUrl}
          alt="award"
          style={{ width: "9rem", padding: "1rem" }}
        />
      </Grid>
      <Grid item md={6} style={{ padding: "1rem 0.5rem" }}>
        <Typography className="cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </Typography>
        <Typography className="cormorant" style={{ color: "white" }}>
          {subtitle}
        </Typography>
      </Grid>
    </Grid>
  </div>
);

const Laurels = () => {
  return (
    <div className="app_bg" style={{ color: "white", padding: "2rem" }}>
      <img
        src={images.logo}
        alt="img logo"
        style={{ width: "10%", textAlign: "center", padding: "1rem" }}
      />
      <div style={{ textAlign: "center" }}>
        <SubHeading title="Awards and Recognition" style={{ color: "white" }} />
      </div>

      <Typography
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "var(--color-golden)",
          fontFamily: "Sofia, sans-serif",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Our Laurels
      </Typography>
      <div className="app__laurels_awards">
        <Grid container>
          <Grid item md={6}>
            {data.awards.map((award) => (
              <AwardCard award={award} key={award.title} />
            ))}
          </Grid>
          <Grid item md={6} padding={2}>
            <div className="app_wrapper_img">
              <img
                src={images.laurels}
                alt="laurels"
                style={{ width: "70%" }}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Laurels;

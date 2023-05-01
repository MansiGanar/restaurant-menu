import React from "react";
import "./MenuItem.css";
import { Grid, Typography } from "@mui/material";

const MenuItem = ({ key, title, price, tags }) => {
  return (
    <div>
      <Grid container className="menuItem_list">
        <Grid item xs={10} sm={10}>
          <Typography
            style={{
              lineHeight: "3rem",
              color: "var(--color-golden)",
              fontFamily: "Sofia, sans-serif",
            }}
          >
            {title}
          </Typography>
          <Typography
            fontSize={12}
            style={{
              color: "white",
              fontFamily: "Sofia, sans-serif",
            }}
          >
            {tags}
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2}>
          <Typography
            style={{
              lineHeight: "3rem",
              color: "white",
              fontFamily: "Sofia, sans-serif",
              textAlign: "center",
            }}
          >
            {price}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default MenuItem;

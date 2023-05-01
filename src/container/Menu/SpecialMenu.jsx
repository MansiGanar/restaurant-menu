import React from "react";
import "./SpecialMenu.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import { Grid, Typography, Button } from "@mui/material";

const SpecialMenu = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div
        style={{
          fontSize: "1rem",
          fontWeight: "500",
          color: "white",
          textAlign: "center",
          marginTop: "5rem",
          padding: "1rem",
        }}
      >
        <SubHeading title="Menu that fits your palatte" />
        <Typography
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "var(--color-golden)",
            fontFamily: "Sofia, sans-serif",
          }}
        >
          Today's Special
        </Typography>
      </div>
      <Grid container>
        <Grid item xs={12} sm={5} style={{ padding: "2rem 1rem" }}>
          <Typography
            style={{
              fontSize: "2rem",
              fontWeight: "500",
              color: "white",
              fontFamily: "Sofia, sans-serif",
              textAlign: "center",
            }}
          >
            Wine & Beer
          </Typography>
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          style={{ textAlign: "center", padding: "auto" }}
        >
          <img
            className="specialMenu__img"
            src={images.menu}
            alt="cocktail shaker"
          />
        </Grid>
        <Grid item xs={12} sm={5} style={{ padding: "2rem 1rem" }}>
          <Typography
            style={{
              fontSize: "2rem",
              fontWeight: "500",
              color: "white",
              fontFamily: "Sofia, sans-serif",
              textAlign: "center",
            }}
          >
            Cocktails
          </Typography>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </Grid>
      </Grid>
      <div style={{ textAlign: "center" }}>
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
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;

import React from "react";
import { SubHeading } from "../../components";
import { Typography, Grid } from "@mui/material";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          color: "white",
          background: "black",
          width: "50%",
          height: "17rem",
          margin: "2rem auto",
          boxShadow: "0.5rem",
        }}
      >
        <SubHeading
          title="Newsletter"
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
            marginTop: "2rem",
          }}
        >
          Subscribe To Our Newsletter
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
          And never miss latest updates
        </Typography>
        <div className="app__newsletter-input"></div>
        <input
          style={{
            margin: "1rem ",
            width: "50%",
            height: "2rem",
            background: "black",
          }}
          type="email"
          placeholder="Email address"
        />
        <button
          className="custom__button"
          style={{
            marginTop: "2rem",
            background: "var(--color-golden)",
            width: "20%",
            height: "2rem",
          }}
        >
          Subscribe
        </button>
      </div>
      <div style={{ padding: "1rem 0 2rem" }}>
        <Grid container>
          <Grid item md={4}>
            <Typography
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                color: "var(--color-golden)",
                fontFamily: "Sofia, sans-serif",
                textAlign: "center",

                marginTop: "2rem",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              style={{
                fontSize: "1rem",
                color: "white",
                fontFamily: "Sofia, sans-serif",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              9 W 53rd St, New York, NY 10019, USA
            </Typography>
            <Typography
              style={{
                fontSize: "1rem",
                color: "white",
                fontFamily: "Sofia, sans-serif",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              +1 212-555-1230
            </Typography>
            <Typography
              style={{
                fontSize: "1rem",
                color: "white",
                fontFamily: "Sofia, sans-serif",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              +1 212-344-1230
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "var(--color-golden)",
                fontFamily: "Sofia, sans-serif",
                textAlign: "center",

                marginTop: "2rem",
              }}
            >
              Gericht
            </Typography>
            <Typography
              style={{
                fontSize: "1rem",
                color: "white",
                fontFamily: "Sofia, sans-serif",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              "The best way to find yourself is to lose yourself in the service
              of others.”
            </Typography>
            <Typography
              style={{
                fontSize: "1rem",
                color: "white",
                fontFamily: "Sofia, sans-serif",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              +1 212-344-1230
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                color: "var(--color-golden)",
                fontFamily: "Sofia, sans-serif",
                textAlign: "center",

                marginTop: "2rem",
              }}
            >
              Working Hours
            </Typography>
            <Typography
              style={{
                fontSize: "1rem",
                color: "white",
                fontFamily: "Sofia, sans-serif",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              Monday-Friday:
            </Typography>
            <Typography
              style={{
                fontSize: "1rem",
                color: "white",
                fontFamily: "Sofia, sans-serif",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              08:00 am -12:00 am
            </Typography>
            <Typography
              style={{
                fontSize: "1rem",
                color: "white",
                fontFamily: "Sofia, sans-serif",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              Saturday-Sunday:
            </Typography>
            <Typography
              style={{
                fontSize: "1rem",
                color: "white",
                fontFamily: "Sofia, sans-serif",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              07:00am -11:00 pm
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//import API from "../../api";
import { Menu, MenuItem, Box, Typography, Grid, Paper } from "@material-ui/core";
import { IconButton, Button, Fab } from "@material-ui/core";
import { Hero } from "../components/Hero/Hero";
//import ProjectSmallCard from "../ProjectComponents/ProjectSmallCard";

import HeroImg from "../images/hero.png";

const HomePage = props => {
  return (
    <Grid container spacing={2}>
      <Grid container>
        <Hero image={HeroImg} primaryButton={{ link: "newproject", text: "Submit a Project" }} secondaryButton={{ link: "signup/volunteer", text: "Become a Volunteer" }}>
          <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
            DO SOMETHING GREAT
          </Typography>
          <Typography variant="h5" align="left" color="textSecondary" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Hero>
      </Grid>
      {/* Footer */}
      <Grid item xs={12} />
      {/* End Main Page Content */}
    </Grid>
  );
};

HomePage.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
};

export default HomePage;

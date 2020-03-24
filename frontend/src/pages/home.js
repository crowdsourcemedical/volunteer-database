import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//import API from "../../api";
import { Menu, MenuItem, Box, Typography, Grid, Paper } from "@material-ui/core";
import { IconButton, Button, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Hero } from "../components/Hero/Hero";
import AboutImg from "../images/about.png";
import Container from "@material-ui/core/Container";

//import ProjectSmallCard from "../ProjectComponents/ProjectSmallCard";

import HeroImg from "../images/hero.png";
import shadows from "@material-ui/core/styles/shadows";

const useStyles = makeStyles(theme => ({
  image: {
		boxShadow: '-9px 10px 0px 1px #006772',
		width: '100%'
  },
}));

const HomePage = props => {
	const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid container>
        <Hero image={HeroImg} primaryButton={{ link: "/projects/submit", text: "Submit a Project" }} secondaryButton={{ link: "signup/volunteer", text: "Become a Volunteer" }}>
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
			<Container>
				<Grid container align="left">
					<Grid item lg={5}>
						<Typography align="left" variant="h3" >Project Information</Typography>
						<Box m={2} />
						<Typography align="left" variant="p">
								Regulated medical devices are the purview of the Food and Drug Administration. Any designer or
								manufacturer producing items claiming to prevent, diagnose, treat, or cure a medical condition
								are under their jurisdiction and subject to premarket approval. Punishments are wide-ranging,
								but our recommendation is to avoid them altogether.
						</Typography>
						<Box m={4} />
						<Typography align="left" variant="p">
							Words like "medical", "prevent", "protect", and "hospital" are going to put you at risk.
							Indicating your mask is for a non-medical purpose is not recommended, because the intent of this
							effort is clear to authorities. When packaging, distributing, or discussing these produced
							materials, we recommend using plain boxes wherever possible, including no claims or disclaimers.
						</Typography>
					</Grid>
					<Grid item lg={2}/>
					<Grid item lg={5}>
						<div>
							<img className={classes.image} src={AboutImg} />
						</div>
					</Grid>
				</Grid>
			</Container>
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

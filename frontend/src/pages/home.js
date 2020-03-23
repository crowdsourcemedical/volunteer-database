import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import API from "../../api";
import { Menu, MenuItem, Box, Typography, Grid, Paper } from '@material-ui/core';
import { IconButton, Button, Fab } from '@material-ui/core';
//import ProjectSmallCard from "../ProjectComponents/ProjectSmallCard";
const HomePage = props => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} />
			<Grid container justify="center">
				{/* Main Page Content */}
				<Grid item xs={8} lg={4} xl={4}>
					<Typography variant="h3">Welcome to Crowd Sourced Medical</Typography>
				</Grid>
			</Grid>
			<Box m={2} />
			<Grid container justify="center">
				<Grid item xs={6} lg={4} xl={4}>
					<Button size="large" variant="contained" color="primary">
						Submit a Project
					</Button>
				</Grid>
				<Grid item xs={6} lg={4} xl={4}>
					<Button size="large" variant="contained" color="primary">
						Become a volunteer
					</Button>
				</Grid>
			</Grid>
			<Box m={4} />
			<Grid container justify="center">
				<Grid item xs={12} lg={8} xl={8}>
					<Typography variant="h5">LEGAL NEEDS TO REVIEW WORDING!!!!!!</Typography>
					<Typography align="left" variant="h6">
						Hi, and thank you for your interest in helping bring people together in this time of need. Our
						Regulatory and Legal teams have a few recommendations regarding language to use in your project.
					</Typography>
					<Box m={2} />
					<Typography align="left" variant="h6">
						Regulated medical devices are the purview of the Food and Drug Administration. Any designer or
						manufacturer producing items claiming to prevent, diagnose, treat, or cure a medical condition
						are under their jurisdiction and subject to premarket approval. Punishments are wide-ranging,
						but our recommendation is to avoid them altogether.
					</Typography>
					<Box m={2} />
					<Typography align="left" variant="h6">
						Words like "medical", "prevent", "protect", and "hospital" are going to put you at risk.
						Indicating your mask is for a non-medical purpose is not recommended, because the intent of this
						effort is clear to authorities. When packaging, distributing, or discussing these produced
						materials, we recommend using plain boxes wherever possible, including no claims or disclaimers.
					</Typography>
				</Grid>
			</Grid>
			{/* Footer */}
			<Grid item xs={12} />
			{/* End Main Page Content */}
		</Grid>
	);
};

HomePage.propTypes = {
	userID: PropTypes.string,
	//TODO: Add More PropTypes
};

export default HomePage;

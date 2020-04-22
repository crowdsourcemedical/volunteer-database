import React from 'react';
import { Typography, Grid, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeroImg from '../images/hero-edit-opacity.png';
import AboutImg from '../images/about.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  topHalf: {
    flexGrow: 1,
    backgroundImage: `url(${HeroImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  topTextContainer: {
    paddingTop: '10%',
    paddingLeft: '15%',
    paddingRight: '30%',
    paddingBottom: '5%',
  },
  bottomHalf: {
    flexGrow: 1,
  },
  bottomTextContainer: {
    flexGrow: 1,
    paddingTop: '10%',
    paddingLeft: '15%',
    paddingRight: '5%',
  },
  bottomHalfImageContainer: {
    paddingTop: '15%',
    paddingLeft: '15%',
    paddingRight: '5%',
  },
  bottomHalfImage: {
    width: '20%',
    height: '20%',
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container direction="column" spacing={0}>
        <Grid item className={classes.topHalf}>
          <Grid container direction="column" className={classes.topTextContainer} spacing={0}>
            <Grid item>
              <Typography variant="h2" color="textPrimary">
                Do Something Great
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </Typography>
              <Box m={2} />
              <Typography variant="body1">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Typography>
            </Grid>
            <Box m={2} />
            <Grid item>
              <Grid container direction="row" spacing={2}>
                <Grid item>
                  <Link to='/signup'>
                    <Button variant="contained" color="primary">
                      Submit a Project
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='/signup/volunteer'>
                    <Button variant="contained" color="secondary">
                      Become a Volunteer
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.bottomHalf}>
          <Grid container direction="row">
            <Grid item xs={7}>
              <Grid container direction="column" className={classes.bottomTextContainer} spacing={2}>
                <Grid item>
                  <Typography variant="h3">Project Information</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    Regulated medical devices are the purview of the Food and Drug Administration. Any designer or
                    manufacturer producing items claiming to prevent, diagnose, treat, or cure a medical condition are
                    under their jurisdiction and subject to premarket approval. Punishments are wide-ranging but our
                    recommendation is to avoid them altogether.
                  </Typography>
                  <Box m={2} />
                  <Typography variant="body1">
                    Words like “medical”, “protect”, and “hostpital” are going to put you at risk. Indicating your mask
                    is for a non-medical purpose is not recommended, because the intent of this effort is clear to
                    authorities. When packaging, distrubting, or discussing these produced materials, we recommend using
                    plain boxes wherever possible, including no claims or disclaimers.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <Grid item className={classes.bottomHalfImageContainer}>
                <Box src={AboutImg} component="img" style={{ width: '80%' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;

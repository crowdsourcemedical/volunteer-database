import React from 'react';
import clsx from 'clsx';
import { Typography, Grid, Button, Box, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeroImg from '../images/hero-edit-opacity.png';
import AboutImg from '../images/about.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  background: {
    flexGrow: 1,
    backgroundImage: `url(${HeroImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 1,
  },
  backgroundMobile: {
    backgroundImage: 'none',
    backgroundColor: '#FAFAFB',
  },
  topTextContainer: {
    paddingTop: '10%',
    textAlign: 'left',
    paddingBottom: '5%',
    width: '100%',
    maxWidth: 640,
  },
  bottomHalf: {
    flexGrow: 1,
  },
  bottomTextContainer: {
    flexGrow: 1,
    paddingTop: '10%',
    paddingBottom: '5%',
    margin: '0 auto',
  },
  bottomHalfImageContainer: {
    paddingTop: '15%',
    paddingLeft: '10%',
    position: 'relative',
  },
  bottomHalfImage: {
    width: '80%',
    boxShadow: `-10px 10px ${theme.palette.primary.main}`,
    margin: '0 auto',
  },
  header: {
    whiteSpace: 'nowrap',
    lineHeight: '160%',
  },
  headerMobile: {
    marginBottom: theme.spacing(2),
    lineHeight: '160%',
  },
  topBody: {
    fontSize: '27px',
    lineHeight: '140%',
  },
  topBodyInBetween: {
    fontSize: '20px',
  },
  topBodyMobile: {
    fontSize: '16px',
  },
  bottomBody: {
    fontSize: '18px',
    lineHeight: '160%',
  },
  bottomBodyMobile: {
    fontSize: '16px',
  },
  topBodyContainer: {
    paddingTop: theme.spacing(1),
  },
  topButtonsContainer: {
    width: '100%',
    margin: '0 auto',
  },
}));

const HOME = {
  header: 'Do Something Great',
  topText1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  topText2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  bottomText1: `Regulated medical devices are the purview of the Food and Drug Administration. Any designer or
                manufacturer producing items claiming to prevent, diagnose, treat, or cure a medical condition are
                under their jurisdiction and subject to premarket approval. Punishments are wide-ranging but our
                recommendation is to avoid them altogether.`,
  bottomText2: `Words like “medical”, “protect”, and “hostpital” are going to put you at risk. Indicating your mask
                is for a non-medical purpose is not recommended, because the intent of this effort is clear to
                authorities. When packaging, distrubting, or discussing these produced materials, we recommend using
                plain boxes wherever possible, including no claims or disclaimers.`,
};

const HomePage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container direction="column">
        <Grid item style={{ position: 'relative' }}>
          <Hidden xsDown>
            <div className={classes.background} />
          </Hidden>
          <Hidden smUp>
            <div className={clsx(classes.background, classes.backgroundMobile)} />
          </Hidden>
          <Grid item xs={10} md={9} style={{ margin: '0 auto' }}>
            <Grid container direction="column" className={classes.topTextContainer} alignItems="start">
              <Grid item>
                <Hidden smDown>
                  <Typography variant="h1" color="textPrimary" className={classes.header}>
                    {HOME.header}
                  </Typography>
                </Hidden>
                <Hidden xsDown mdUp>
                  <Typography variant="h2" color="textPrimary" className={classes.header}>
                    {HOME.header}
                  </Typography>
                </Hidden>
                <Hidden smUp>
                  <Typography variant="h3" color="textPrimary" className={classes.headerMobile}>
                    {HOME.header}
                  </Typography>
                </Hidden>
              </Grid>
              <Grid item className={classes.topBodyContainer}>
                <Hidden smDown>
                  <Typography variant="body1" className={classes.topBody}>
                    {HOME.topText1}
                  </Typography>
                  <Box m={2} />
                  <Typography variant="body1" className={classes.topBody}>
                    {HOME.topText2}
                  </Typography>
                </Hidden>

                <Hidden xsDown mdUp>
                  <Typography variant="body1" className={clsx(classes.topBody, classes.topBodyInBetween)}>
                    {HOME.topText1}
                  </Typography>
                  <Box m={2} />
                  <Typography variant="body1" className={clsx(classes.topBody, classes.topBodyInBetween)}>
                    {HOME.topText2}
                  </Typography>
                </Hidden>
                <Hidden smUp>
                  <Typography variant="body1" className={clsx(classes.topBody, classes.topBodyMobile)}>
                    {HOME.topText1}
                  </Typography>
                  <Box m={2} />
                  <Typography variant="body1" className={clsx(classes.topBody, classes.topBodyMobile)}>
                    {HOME.topText2}
                  </Typography>
                </Hidden>
              </Grid>
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
          <Grid container direction="row" justify="center">
            <Grid item xs={10} md={5} lg={5}>
              <Grid container direction="column" className={classes.bottomTextContainer} spacing={2}>
                <Grid item>
                  <Typography variant="h3">Project Information</Typography>
                </Grid>
                <Grid item>
                  <Hidden xsDown>
                    <Typography variant="body1" className={classes.bottomBody}>
                      {HOME.bottomText1}
                    </Typography>
                    <Box m={2} />
                    <Typography variant="body1" className={classes.bottomBody}>
                      {HOME.bottomText2}
                    </Typography>
                  </Hidden>
                  <Hidden smUp>
                    <Typography variant="body1" className={clsx(classes.bottomBody, classes.bottomBodyMobile)}>
                      {HOME.bottomText1}
                    </Typography>
                    <Box m={2} />
                    <Typography variant="body1" className={clsx(classes.bottomBody, classes.bottomBodyMobile)}>
                      {HOME.bottomText2}
                    </Typography>
                  </Hidden>
                </Grid>
              </Grid>
            </Grid>
            <Hidden smDown>
              <Grid item xs={5} md={5} lg={5}>
                <Grid item className={classes.bottomHalfImageContainer}>
                  <Box src={AboutImg} component="img" className={classes.bottomHalfImage} />
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;

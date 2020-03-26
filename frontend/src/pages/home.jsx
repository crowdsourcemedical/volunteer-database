import React from 'react';
import { Typography, Grid, Button, Container, Box } from '@material-ui/core';
import HeroBG from '../images/hero-edit.png';
import { makeStyles } from '@material-ui/core/styles';
import AboutImg from '../images/about.png';
import { Hero } from '../components/Hero/Hero';

const primaryButton = {
  link: '#',
  text: 'Submit a Project',
};

const secondaryButton = {
  link: '#',
  text: 'Become a Volunteer',
};

const title = 'Do Something Great';

const useStyles = makeStyles((theme) => ({
  root: {},
  heroText: {
    fontSize: '27px',
  },
  projectInfoWrapper: {
    background: 'green',
  },
  infoWrapper: {
    padding: '70px 0',
  },
  infoImageWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  infoImageContainer: {
    position: 'relative',
    width: '460px',
    height: '300px',
    background: '#006772',
  },
  infoImage: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '-10px',
    right: '-10px',
  },
}));

const AboutPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Hero
        title={title}
        image={HeroBG}
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
      >
        <Typography variant="body1" className={classes.heroText} paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.
        </Typography>
        <Typography variant="body1" className={classes.heroText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Hero>
      <Container>
        <Grid container className={classes.infoWrapper}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2">Project Information</Typography>
            <Typography variant="body1" paragraph>
              Regulated medical devices are the purview of the Food and Drug
              Administration. Any designer or manufacturer producing items
              claiming to prevent, diagnose, treat, or cure a medical condition
              are under their jurisdiction and subject to premarket approval.
              Punishments are wide-ranging but our recommendation is to avoid
              them altogether.
            </Typography>
            <Typography variant="body1" paragraph>
              Words like “medical”, “protect”, and “hostpital” are going to put
              you at risk. Indicating your mask is for a non-medical purpose is
              not recommended, because the intent of this effort is clear to
              authorities. When packaging, distrubting, or discussing these
              produced materials, we recommend using plain boxes wherever
              possible, including no claims or disclaimers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className={classes.infoImageWrapper}>
              <div className={classes.infoImageContainer}>
                <img
                  className={classes.infoImage}
                  src={AboutImg}
                  alt="about_image"
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutPage;

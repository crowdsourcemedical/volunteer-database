import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  wrapper: {
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '80vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  overlay: {
    backgroundColor: 'white',
    opacity: '0.7',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  },
  content: {
    zIndex: '10',
  },
  heroButtons: {
    marginTop: '50px',
  },
});

const Hero = ({ image, children, primaryButton, secondaryButton }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper} style={{ backgroundImage: `url(${image})` }}>
      <div className={classes.overlay} />
      <Container maxWidth="md" className={classes.content}>
        <div>
          {children}
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="left">
              {primaryButton ? (
                <Grid item>
                  <Button component={Link} to={primaryButton.link} variant="contained" color="primary">
                    {primaryButton.text}
                  </Button>
                </Grid>
              ) : null}
              {secondaryButton ? (
                <Grid item>
                  <Button component={Link} to={secondaryButton.link} variant="contained" color="secondary">
                    {secondaryButton.text}
                  </Button>
                </Grid>
              ) : null}
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
};

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  primaryButton: PropTypes.object.isRequired,
  secondaryButton: PropTypes.object.isRequired,
};

export default Hero;

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minHeight: '500px',
    height: '80vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'relative',
  },
  overlay: {
    backgroundColor: 'white',
    opacity: '0.90',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  },
  content: {
    zIndex: '2',
  },
  heroTitleContainer: {
    width: '700px',
  },
  heroTextContainer: {
    width: '650px',
  },
  heroButtons: {
    marginTop: '50px',
  },
}));
export const Hero = ({
  title,
  image,
  children,
  primaryButton,
  secondaryButton,
}) => {
  const classes = useStyles();

  return (
    <div
      className={classes.wrapper}
      style={{ backgroundImage: 'url(' + image + ')' }}
    >
      <div className={classes.overlay} />
      <Container maxWidth="lg" className={classes.content}>
        <Grid container>
          <Grid item xs={12}>
            <Box className={classes.heroTextContainer}>
              <Typography className={classes.heroTitleContainer} variant="h1">
                {title}
              </Typography>

              {children}
              <div className={classes.heroButtons}>
                <Grid container spacing={2}>
                  {primaryButton ? (
                    <Grid item>
                      <Button
                        component={Link}
                        to={primaryButton.link}
                        variant="contained"
                        color="primary"
                      >
                        {primaryButton.text}
                      </Button>
                    </Grid>
                  ) : null}
                  {secondaryButton ? (
                    <Grid item>
                      <Button
                        component={Link}
                        to={secondaryButton.link}
                        variant="contained"
                        color="secondary"
                      >
                        {secondaryButton.text}
                      </Button>
                    </Grid>
                  ) : null}
                </Grid>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node.isRequired,
  primaryButton: PropTypes.object,
  secondaryButton: PropTypes.object,
};

import React from 'react';
import { Container, Grid, Box, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../styles/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: COLORS.grayLight,
    textAlign: 'center',
    height: '120px',
  },
  linkText: {
    textAlign: 'center',
    fontSize: '20px',
    color: '#000',
    margin: '0 70px',
  },
  footerItemContainer: {
    height: '50%',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.footerItemContainer}
      >
        <Link className={classes.linkText} href="#">
          How it Works
        </Link>
        <Link className={classes.linkText} href="#">
          Legal
        </Link>
        <Link className={classes.linkText} href="#">
          Get Involved
        </Link>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.footerItemContainer}
      >
        <Typography variant="body1">
          <span>&copy;</span>
          {new Date().getFullYear()}
          {' Crowd Source Medical'}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;

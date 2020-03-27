import React from 'react';
import { Grid, Box, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../styles/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: COLORS.grayLight,
    textAlign: 'center',
    paddingTop: theme.spacing(8),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(1),
  },
  content: {
    marginRight: 'auto',
    marginBottom: theme.spacing(6),
    marginLeft: 'auto',
    maxWidth: '500px',
  },
  copy: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container justify="space-around" className={classes.content}>
        <Link href="#">
          <Typography variant="h5">How it Works</Typography>
        </Link>

        <Link href="#">
          <Typography variant="h5">Legal</Typography>
        </Link>

        <Link href="#">
          <Typography variant="h5">Get Involved</Typography>
        </Link>
      </Grid>

      <Typography variant="h6">
        Crowd Source Medical
        <span className={classes.copy}>&copy;</span>
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;

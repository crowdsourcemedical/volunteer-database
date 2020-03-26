import React, { useState } from 'react';
import {
  Grid, Typography, Button, Hidden, Dialog, Avatar,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../images/crowd-source-logo.svg';
import LoginForm from './Forms/LoginForm';
import Searchbar from './Search/MobileSearch';


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    height: 50,
  },
  logo: {
    paddingLeft: 10,
  },
  login: {
    paddingRight: 10,
  },
}));

const Footer = () => {
  const classes = useStyles();
  const [loginIsOpen, setLoginIsOpen] = useState(false);

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid container xs={6}>
        <Grid item sm={12} md={6}>
          <Grid container className={classes.logo}>
            <img src={Logo} alt="crowd source medical logo" />
            <Typography variant="h5" className={classes.logoText}>
              Crowd Source Solutions
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Hidden smDown>
            <Searchbar />
          </Hidden>
        </Grid>
      </Grid>
      <Grid container xs={6} justify="flex-end" className={classes.login}>
        {loginIsOpen
          ? <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" className={classes.large} />
          : (
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              endIcon={<ExitToAppIcon />}
              onClick={() => setLoginIsOpen(true)}
            >
              Login
            </Button>
          )}
        <Dialog
          open={loginIsOpen}
          onClose={() => setLoginIsOpen(false)}
          BackdropProps={{
            className: classes.backdrop,
          }}
        >
          <LoginForm />
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default Footer;

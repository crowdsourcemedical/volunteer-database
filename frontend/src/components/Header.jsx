import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Typography, Button, Hidden, Dialog, Avatar } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../images/crowd-source-logo.svg';
import LoginForm from './Forms/LoginForm';
import SearchBar from './Search/SearchBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    height: 80,
  },
  rightNav: {
    paddingRight: theme.spacing(2),
    flexFlow: 'row nowrap',
  },
  leftNav: {
    flexFlow: 'row nowrap',
  },
  logoContainer: {
    paddingLeft: theme.spacing(2),
    flexFlow: 'row nowrap',
  },
  searchBarContainer: {
    paddingLeft: theme.spacing(3),
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [loginIsOpen, setLoginIsOpen] = useState(false);

  const closeLogin = () => setLoginIsOpen(false);

  return (
    <Grid container className={classes.root} justify="center" alignItems="center">
      <Grid container xs={6} md={8}>
        <Grid container className={classes.leftNav}>
          <Grid item>
            <Grid container className={classes.logoContainer} alignItems="center">
              <img src={Logo} alt="crowd source medical logo" />
              <Typography variant="h5" className={classes.logoText}>
                Crowd Source Solutions
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <div className={classes.searchBarContainer}>
              <Hidden smDown>
                <SearchBar />
              </Hidden>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs={6} md={4} justify="flex-end" className={classes.rightNav}>
        <Hidden mdUp>
          <SearchBar mobile />
        </Hidden>
        {loginIsOpen ? (
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" className={classes.large} />
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="large"
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
          <LoginForm {...props} closeLogin={closeLogin} />
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default withRouter(Header);

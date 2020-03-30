import React from 'react';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// None Material UI Components
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import SignUp from './Sign-up.component';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-evenly',
    listStyleType: 'none',
  },
  li: {
    listStyleType: 'none',
  },
  liHover: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  button: {
    fontFamily: 'Muli',
    fontStyle: 'normal',
    fontSize: '1rem',
    lineHeight: '24px',
    color: '#2196F3',
    border: '1px solid #2196F3',
    boxSizing: 'border-box',
    borderRadius: '40px',
  },
  normalIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: theme.spacing(1),
    borderRadius: '0px',
  },
  a: {
    '&:hover': {
      color: '#0b92a0',
      curstor: 'pointer',
    },
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} />
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <Card className={classes.root}>
            <CardContent>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid container direction="row" justify="center" alignItems="center">
                  <Router>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                      <h2 style={{ textAlign: 'center' }}>Login</h2>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                      <Switch>
                        <Route path="/form/signup" exact component={SignUp} />
                        <Link to="/form/signup" style={{ textDecoration: 'none' }}>
                          <h2 style={{ textAlign: 'right' }}>Signup</h2>
                        </Link>
                      </Switch>
                    </Grid>

                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                      <h2 style={{ textAlign: 'right' }}>X</h2>
                    </Grid>
                  </Router>

                  {/* OAuth Button Section */}
                  <ul>
                    <li className={classes.li}>
                      <Button variant="outlined" fullWidth className={classes.button}>
                        <FacebookIcon className={classes.normalIcon} style={{ color: '#485A96' }} /> CONTINUE WITH
                        GOOGLE
                      </Button>
                    </li>
                    <li className={classes.li}>
                      <br />
                    </li>
                    <li className={classes.li}>
                      <Button variant="outlined" fullWidth className={classes.button}>
                        <FacebookIcon className={classes.normalIcon} style={{ color: '#485A96' }} />
                        CONTINUE WITH FACEBOOK
                      </Button>
                    </li>
                    <li className={classes.li}>
                      <br />
                    </li>
                    <li className={classes.li}>
                      <hr />
                    </li>
                    <li className={classes.li}>
                      <h3 style={{ textAlign: 'center' }}>OR</h3>
                    </li>
                    <li className={classes.li}>
                      <hr />
                    </li>
                  </ul>

                  {/* FORM Section */}

                  <form className={classes.root} noValidate autoComplete="off">
                    <ul>
                      <li className={classes.li}>
                        <TextField id="filled-basic" fullWidth label="Email Address" variant="filled" />
                      </li>
                      <li className={classes.li}>
                        <br />
                      </li>
                      <li className={classes.li}>
                        <TextField id="filled-basic" fullWidth label="Password" variant="filled" />
                      </li>
                      <li className={classes.li}>
                        <a href="#" style={{ float: 'right', color: '#006772', textDecoration: 'none' }}>
                          Forgot Password?
                        </a>
                      </li>
                      <li className={classes.li}>
                        <br />
                        <br />
                      </li>
                      <li className={classes.li}>
                        <Button variant="contained" fullWidth color="primary">
                          Login
                        </Button>
                      </li>
                    </ul>
                  </form>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} />
      </Grid>
    </div>
  );
}

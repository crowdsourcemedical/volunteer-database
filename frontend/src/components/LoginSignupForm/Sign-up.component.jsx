import React from 'react';

// Material UI Components

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// None Material UI Components
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import Login from './Login.component';

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
  extraLarge: {
    margin: '0 auto',
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

export default function SignUp() {
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
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2} />
                  <Router>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <Switch>
                        <Route path="/form/login" exact component={Login} />
                        <Link to="/form/login" style={{ textDecoration: 'none' }}>
                          <h2 style={{ textAlign: 'center', color: 'black' }}>Login</h2>
                        </Link>
                      </Switch>
                    </Grid>
                  </Router>
                  <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                    <h2
                      style={{
                        textAlign: 'center',
                        width: '80%',
                        borderBottomStyle: 'solid',
                        borderBottomColor: '#006772',
                      }}
                    >
                      Signup
                    </h2>
                  </Grid>

                  <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                    <h2 style={{ textAlign: 'center' }}>X</h2>
                  </Grid>

                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2} />

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.extraLarge} />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <br />
                  </Grid>

                  {/* CheckBox */}
                  <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                      <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                        <FormControlLabel
                          value="Volunteer"
                          control={<Checkbox color="primary" />}
                          label="Volunteer"
                          labelPlacement="Volunteer"
                        />
                      </Grid>
                      <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                        <FormControlLabel
                          value="Project Creator"
                          control={<Checkbox color="primary" />}
                          label="Project Creator"
                          labelPlacement="Project Creator"
                        />
                      </Grid>
                      <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                        <FormControlLabel
                          value="Both"
                          control={<Checkbox color="primary" />}
                          label="Both"
                          labelPlacement="Both"
                        />
                      </Grid>
                    </FormGroup>
                  </FormControl>

                  {/* FORM Section */}
                  <form className={classes.root} noValidate autoComplete="off">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <TextField id="filled-basic" fullWidth label="Username" variant="filled" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <TextField id="filled-basic" fullWidth label="Password" variant="filled" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <TextField id="filled-basic" fullWidth label="Confirm Password" variant="filled" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <br />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Button variant="contained" fullWidth color="primary">
                        Sign Up
                      </Button>
                    </Grid>
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

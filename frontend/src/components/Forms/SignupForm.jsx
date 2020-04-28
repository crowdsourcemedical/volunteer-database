import React from 'react';
import {Card, Grid, Typography, CardContent, Button, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import api from '../../helpers/api';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    width: 500,
    margin: '0 auto',
    overflowY: 'auto',
  },
  header: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
  headerSignup: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
    },
  },
  signUpLink: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  content: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(4),
    fontSize: '16px',
    lineHeight: '20px',
    maxWidth: 316,
    width: '100%',
  },
  signupButton: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 40,
    maxWidth: 316,
    width: '100%',
  },
  error: {
    marginBottom: theme.spacing(2),
    color: '#F44336',
  },
}));

const SignupForm = (props) => {
  const { closeSignup, toggle, history } = props;

  const classes = useStyles();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [signupError, setSignupError] = React.useState('');

  const handleSubmit = async () => {
    setEmailError('');
    setPasswordError('');
    setSignupError('');

    if (email.length <= 0) {
      setEmailError('Email is required');
      return;
    }

    if (password.length <= 0) {
      setPasswordError('Password is required');
      return;
    }

    const response = await api.createUser({ username: email, password });

    const error = response && response.detail;
    if (error) {
      setSignupError('Email or password are incorrect');
      return;
    }

    if (response.access_token) {
      closeSignup();
      history.push('profile');
    }
  };

  return (
    <Card className={classes.root} elevation={4}>
      <Grid container direction="row" justify="space-between" alignItems="center" className={classes.header}>
        <Typography variant="h4" component="h2" className={classes.headerSignup}>
          Sign Up
        </Typography>
        <a className={classes.signUpLink} onClick={() => toggle()}>
          Already have an account? Login here
        </a>
      </Grid>

      <CardContent className={classes.content}>
        <Grid container direction="column" alignItems="center" justify="center">


          <div className={classes.error}>{signupError}</div>

          <TextField
            label="Email"
            type="email"
            variant="filled"
            className={classes.input}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            error={emailError !== ''}
            helperText={emailError}
          />
          <TextField
            label="First Name"
            type="userFirst"
            variant="filled"
            className={classes.input}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            error={emailError !== ''}
            helperText={emailError}
          />
          <TextField
            label="Last Name"
            type="userLast"
            variant="filled"
            className={classes.input}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            error={emailError !== ''}
            helperText={emailError}
          />
          <TextField
            label="Password"
            type="password"
            variant="filled"
            className={classes.input}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            error={passwordError !== ''}
            helperText={passwordError}
          />

          <Button
            color="primary"
            size="large"
            variant="contained"
            className={classes.signupButton}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

SignupForm.propTypes = {
  closeSignup: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

SignupForm.defaultProps = {
  history: {},
};

export default SignupForm;

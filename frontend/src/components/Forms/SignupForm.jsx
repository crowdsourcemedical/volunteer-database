import React from 'react';
import { Card, Divider, Grid, Typography, CardContent, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FacebookIcon from '../../images/facebook-icon.svg';
import GoogleIcon from '../../images/google-icon.svg';

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
  headerLogin: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
    },
  },
  signUpLink: {
    color: theme.palette.primary.main,
  },
  content: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  or: {
    backgroundColor: theme.palette.common.white,
    margin: '-42px auto 42px',
    width: '100px',
    fontSize: '16px',
    color: theme.palette.grey['700'],
    display: 'flex',
    justifyContent: 'center',
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    width: '100%',
    maxWidth: 316,
  },
  input: {
    marginBottom: theme.spacing(4),
    fontSize: '16px',
    lineHeight: '20px',
    maxWidth: 316,
    width: '100%',
  },
  loginButton: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 40,
    maxWidth: 316,
    width: '100%',
  },
  externalLoginButton: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-around',
    border: '1px solid #2196F3',
    borderRadius: '40px',
    color: theme.palette.info.main,
    letterSpacing: 1,
    maxWidth: 316,
    width: '100%',
  },
  forgotPassword: {
    marginBottom: theme.spacing(3),
    color: theme.palette.primary.main,
    maxWidth: 316,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  error: {
    marginBottom: theme.spacing(2),
    color: '#F44336',
  },
}));

const SignupForm = (props) => {
  const { closeLogin, history } = props;

  const classes = useStyles();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [loginError, setLoginError] = React.useState('');

  const handleSubmit = async () => {
    setEmailError('');
    setPasswordError('');
    setLoginError('');

    if (email.length <= 0) {
      setEmailError('Email is required');
      return;
    }

    if (password.length <= 0) {
      setPasswordError('Password is required');
      return;
    }

    const response = await api.login({ username: email, password });

    const error = response && response.detail;
    if (error) {
      setLoginError('Email or password are incorrect');
      return;
    }

    if (response.access_token) {
      closeLogin();
      history.push('profile');
    }
  };

  return (
    <Card className={classes.root} elevation={4}>
      <Grid container direction="row" justify="space-between" alignItems="center" className={classes.header}>
        <Typography variant="h4" component="h2" className={classes.headerLogin}>
          Login
        </Typography>
        <a href="localhost:3000" className={classes.signUpLink}>
          Don't have an account? Sign up here
        </a>
      </Grid>

      <CardContent className={classes.content}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Button variant="outlined" color="primary" size="large" className={classes.externalLoginButton}>
            <img src={GoogleIcon} alt="Google Logo" />
            <span>Continue with Google</span>
          </Button>

          <Button variant="outlined" color="primary" size="large" className={classes.externalLoginButton}>
            <img src={FacebookIcon} alt="Facebook Logo" />
            <span>Continue with Facebook</span>
          </Button>

          <Divider className={classes.divider} />
          <div className={classes.or}>OR</div>

          <div className={classes.error}>{loginError}</div>

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
            className={classes.loginButton}
            onClick={handleSubmit}
          >
            Signup
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

SignupForm.propTypes = {
  closeLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

SignupForm.defaultProps = {
  history: {},
};

export default SignupForm;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      marginTop: theme.spacing(3),
      margin: theme.spacing(1),
    },
    label: {
      margin: 8,
      color: '#A1A1A1',
    },
  },
}));

export default function ComposedTextField() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id='standard-full-width'
            label='First Name'
            className={classes.label}
            placeholder='John'
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='standard-full-width'
            label='Last Name'
            className={classes.label}
            placeholder='Doe'
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id='standard-full-width'
            label='Email Address'
            className={classes.label}
            fullWidth
            placeholder='Doe'
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <h2>Email</h2>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            value='end'
            control={<Checkbox color='primary' />}
            label='New Message'
            labelPlacement='end'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            value='end'
            control={<Checkbox color='primary' />}
            label='Project Request'
            labelPlacement='end'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant='contained'
            size='large'
            color='default'
            className={classes.margin}
            style={{ color: '#AB2346' }}
          >
            Delete Account
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} style={{ float: 'right' }}>
          <Button
            variant='contained'
            size='large'
            color='primary'
            className={classes.margin}
          >
            Save Settings
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

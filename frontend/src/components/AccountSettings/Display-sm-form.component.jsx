import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import { ContactInformation, Notification } from './Information.component';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {},
    label: {
      margin: 8,
      color: '#A1A1A1',
    },
  },
}));

export default function XSFormField() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <Grid container spacing={3}>
        {/* Head line */}
        <Grid item sm={2} />
        <Grid item sm={8}>
          <h1>Account Settings</h1>
          <ContactInformation title='Contact Information' />
        </Grid>
        <Grid item sm={2} />

        {/* First Name Text Field  */}
        <Grid item sm={2} />
        <Grid item sm={8}>
          <TextField
            id='standard-full-width'
            label='First Name'
            className={classes.label}
            fullWidth
            placeholder='John'
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item sm={2} />

        {/* Last Name Text Field  */}
        <Grid item sm={2} />
        <Grid item sm={8}>
          <TextField
            id='standard-full-width'
            label='Last Name'
            className={classes.label}
            fullWidth
            placeholder='Doe'
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item sm={2} />

        {/* Email Text Field */}
        <Grid item sm={2} />
        <Grid item sm={8}>
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
        <Grid item sm={2} />

        {/* Contact Information */}
        <Grid item sm={2} />
        <Grid item sm={8}>
          <Notification title='Contact Information' />
          <h2>Email</h2>
        </Grid>
        <Grid item sm={2} />

        {/* Check Box */}
        <Grid item sm={2} />
        <Grid item sm={4}>
          <FormControlLabel
            value='end'
            control={<Checkbox color='primary' />}
            label='New Message'
            labelPlacement='end'
          />
        </Grid>
        <Grid item sm={4}>
          <FormControlLabel
            value='end'
            control={<Checkbox color='primary' />}
            label='Project Request'
            labelPlacement='end'
          />
        </Grid>
        <Grid item sm={2} />

        {/* Buttons  */}
        <Grid item sm={2} />

        <Grid item sm={4}>
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
        <Grid item sm={4} style={{ float: 'right' }}>
          <Button
            variant='contained'
            size='large'
            color='primary'
            className={classes.margin}
          >
            Save Settings
          </Button>
        </Grid>
        <Grid item sm={2} />
      </Grid>
    </form>
  );
}

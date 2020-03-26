import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import { ContactInformation, Notification } from './Information.component';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      marginTop: theme.spacing(3),
    },
    label: {
      margin: 8,
      color: '#A1A1A1',
    },
  },
}));

export default function LGFormField() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <Grid container spacing={3}>
        {/* Headline */}
        <Grid item lg={2} />

        <Grid item lg={3}>
          <h1>Account Settings</h1>
          <ContactInformation title='Contact Information' />
        </Grid>

        <Grid item lg={1} />
        {/* First Name Form Field */}

        <Grid item lg={2} style={{ alignSelf: 'flex-end' }}>
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
        <Grid item lg={2} style={{ alignSelf: 'flex-end' }}>
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

        {/* Email Address Form Field */}
        <Grid item lg={2} />
        <Grid item lg={6} />

        <Grid item lg={4}>
          <TextField
            id='standard-full-width'
            label='Email Address'
            className={classes.label}
            fullWidth
            placeholder='Email'
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item lg={2} />

        {/* Contact Information */}
        <Grid item lg={2} />
        <Grid item lg={3} style={{ alignSelf: 'flex-end' }}>
          <h2 style={{ margin: '0' }}>Contact Information</h2>
        </Grid>
        <Grid item lg={1} />
        <Grid item lg={4} style={{ alignSelf: 'flex-end' }}>
          <h2 style={{ margin: '0' }}>Emails</h2>
        </Grid>
        <Grid item lg={2} />
        {/* Check Box */}
        <Grid item lg={2} />
        <Grid item lg={4} style={{ alignSelf: 'flex-end' }}>
          <p style={{ margin: '0' }}>
            We'll try to connect you with the kind of talent you need andare
            looking for.
          </p>
        </Grid>
        <Grid item lg={2}>
          <FormControlLabel
            value='end'
            control={<Checkbox color='primary' />}
            label='New Message'
            labelPlacement='end'
          />
        </Grid>
        <Grid item lg={2}>
          <FormControlLabel
            value='end'
            control={<Checkbox color='primary' />}
            label='Project Request'
            labelPlacement='end'
          />
        </Grid>
        <Grid item lg={2} />

        {/* Buttons */}
        <Grid item lg={6} />
        <Grid item lg={2}>
          <Button
            variant='contained'
            size='medium'
            color='default'
            className={classes.margin}
            style={{ color: '#AB2346' }}
          >
            Delete Account
          </Button>
        </Grid>
        <Grid item lg={2}>
          <Button
            variant='contained'
            size='medium'
            color='primary'
            className={classes.margin}
          >
            Save Settings
          </Button>
        </Grid>
        <Grid item md={2} />
      </Grid>
    </form>
  );
}

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
      margin: theme.spacing(6),
    },
  },
}));

export default function XSFormField() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <Grid container spacing={3}>
        {/* Title */}
        <Grid item lg={2} />
        <Grid item lg={4}>
          <h1>Account Setting</h1>
        </Grid>
        <Grid item lg={4} />
        <Grid item lg={2} />

        {/* Contact Information Row */}
        <Grid item lg={2} />
        <Grid item lg={3}>
          <ContactInformation title='Contact Information' />
        </Grid>

        <Grid item lg={1} />
        <Grid item lg={2} style={{ alignSelf: 'center' }}>
          <TextField
            id='standard-full-width'
            label='First Name'
            placeholder='John'
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item lg={2} style={{ alignSelf: 'center' }}>
          <TextField
            id='standard-full-width'
            label='Last Name'
            placeholder='Doe'
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item lg={2} />

        {/* Email Row */}

        <Grid item lg={2} />
        <Grid item lg={4} />
        <Grid item lg={4}>
          <TextField
            id='standard-full-width'
            label='Email Address'
            fullWidth
            placeholder='Doe'
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item lg={2} />

        {/* Notification & Email Title Row */}

        <Grid item lg={2} />
        <Grid item lg={3}>
          <h2 style={{ margin: '0' }}>Notification Presence</h2>
        </Grid>
        <Grid item lg={1} />
        <Grid item lg={4}>
          <h2 style={{ margin: '0' }}>Email</h2>
        </Grid>
        <Grid item lg={2} />

        {/* Paragraph and CheckBox row */}
        <Grid item lg={2} />
        <Grid lg={3} style={{ alignSelf: 'center' }}>
          <p style={{ margin: '0', paddingLeft: '12px' }}>
            We'll try to connect you with the kind of talent you need andare
            looking for.
          </p>
        </Grid>
        <Grid item lg={1} />

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
        {/* Button Row */}

        <Grid item lg={6} />

        <Grid item lg={2}>
          <Button
            variant='contained'
            size='large'
            color='default'
            className={classes.margin}
            style={{ float: 'right', color: '#AB2346' }}
          >
            Delete Account
          </Button>
        </Grid>
        <Grid item lg={2}>
          <Button
            variant='contained'
            size='large'
            color='primary'
            className={classes.margin}
            style={{ float: 'right' }}
          >
            Save Settings
          </Button>
        </Grid>
        <Grid item lg={2} />
      </Grid>
    </form>
  );
}

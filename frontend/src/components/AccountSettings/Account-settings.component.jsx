import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// Account Settings Components
import { ContactInformation } from './Information.component';
import ContactForm from './Contant-form.component';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function AccountSettings() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2} />
        <Grid item xs={12} sm={4}>
          <Grid
            container
            direction='column'
            justify='space-between'
            spacing={3}
          >
            <Grid item xs={12} sm={12}>
              <h1>Account Settings</h1>
            </Grid>

            <Hidden only='xs'>
              <Grid item xs={12} sm={3} />
              <Grid item xs={12} sm={3} />
              <Grid item xs={12} sm={3} />
              <Grid item xs={12} sm={3} />
              <Grid item xs={12} sm={9} style={{ textAlign: 'left' }}>
                <ContactInformation title='Contact Information' />
              </Grid>
              <Grid item xs={12} sm={9} style={{ textAlign: 'left' }}>
                <h1>Notification Preferences</h1>
                <p> </p>
              </Grid>
            </Hidden>

            <Grid item xs={12} sm={2} />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid
            container
            direction='column'
            justify='space-between'
            spacing={3}
          >
            <Grid item xs={12} sm={3} />
            <Grid item xs={12} sm={3} />
            <Grid item xs={12} sm={3} />
            <Grid item xs={12} sm={3} />
            <Grid item xs={12} sm={7} style={{ textAlign: 'left' }}>
              <ContactForm />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5} />
        </Grid>
      </Grid>
    </div>
  );
}

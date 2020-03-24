import React, { Fragment } from 'react';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Project to Display Components
import UserProfile from './User-profile.component.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function PortFolioGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <Fragment>
        <Grid item xs={3}>
          <UserProfile />
        </Grid>
        <Grid item xs={3}>
          <UserProfile />
        </Grid>
        <Grid item xs={3}>
          <UserProfile />
        </Grid>
        <Grid item xs={3}>
          <UserProfile />
        </Grid>
      </Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Account Settings Components
import { Hidden } from '@material-ui/core';
import XSFormField from './XS-form.component';
import LGFormField from './LG-form.component';
import MDFormField from './MD-form.component';
import SMFormField from './SM-form.component';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
}));

export default function AccountSettings() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Hidden only={['xs', 'sm', 'md', 'xl']}>
          <LGFormField />
        </Hidden>
        <Hidden only={['xs', 'sm', 'lg', 'xl']}>
          <MDFormField />
        </Hidden>
        <Hidden only={['xs', 'md', 'lg', 'xl']}>
          <SMFormField />
        </Hidden>
        <Hidden smUp mdUp lgUp xlUp>
          <XSFormField />
        </Hidden>
      </Grid>
    </div>
  );
}

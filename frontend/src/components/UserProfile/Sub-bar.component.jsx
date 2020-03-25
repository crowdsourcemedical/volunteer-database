import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      float: 'right'
    }
  }
}));

export const SubBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant='contained' color='primary'>
        Message
      </Button>
      <Button variant='contained' color='primary' href='#contained-buttons'>
        Follower
      </Button>
    </div>
  );
};

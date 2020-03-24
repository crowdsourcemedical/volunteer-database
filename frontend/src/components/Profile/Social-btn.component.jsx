import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { teal, cyan } from '@material-ui/core/colors';

const FollowBtn = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
    '&:hover': {
      backgroundColor: teal[700]
    }
  }
}))(Button);

const ContactBtn = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: cyan[500],
    '&:hover': {
      backgroundColor: cyan[700]
    }
  }
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function SocialBtn() {
  const classes = useStyles();

  return (
    <div>
      <ContactBtn
        variant='contained'
        color='primary'
        className={classes.margin}
        style={{ borderRadius: '10rem' }}
      >
        FOLLOW
      </ContactBtn>
      <FollowBtn
        variant='contained'
        color='primary'
        className={classes.margin}
        style={{ borderRadius: '10rem' }}
      >
        CONTACT
      </FollowBtn>
    </div>
  );
}

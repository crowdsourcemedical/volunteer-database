import React, { Fragment } from 'react';
import { Avatar, makeStyles } from '@material-ui/core';
import PinDropIcon from '@material-ui/icons/PinDrop';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'grid',
    gridTemplateColumns: "'repeat(auto-fit, minmax(19rem, 1fr))'"
  },
  main: {
    display: 'grid',
    gridTemplateColumns: "'repeat(auto-fit, minmax(19rem, 1fr))'"
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  }
}));

function AccountProfile({
  avtarName,
  accountImg,
  description,
  state,
  country
}) {
  const classes = useStyles();
  return (
    <Fragment>
      <header className={classes.header}>
        <div>
          <p>Crowd Source Solutions</p>
        </div>
        <div>My Account</div>
      </header>
    </Fragment>
  );
}
export default AccountProfile;

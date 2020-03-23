import React, { Fragment } from 'react';
import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  large: {
    marginTop: '-0.7rem',
    marginLeft: '1rem',
    width: theme.spacing(5),
    height: theme.spacing(5)
  }
}));

const ulStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '6rem'
};
const liStyle = {
  listStyleType: 'none'
};

function AccountTop({ accountImg }) {
  const classes = useStyles();
  return (
    <Fragment>
      <ul style={ulStyle}>
        <li style={liStyle}>Crowd Source Solutions</li>
        <li style={liStyle}>
          My Account
          <Avatar
            src={accountImg}
            className={classes.large}
            style={{ float: 'right' }}
          />
        </li>
      </ul>
    </Fragment>
  );
}
export default AccountTop;

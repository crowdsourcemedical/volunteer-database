import React, { Fragment } from 'react';
import { Avatar, makeStyles } from '@material-ui/core';
import PinDropIcon from '@material-ui/icons/PinDrop';

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  }
}));

const grid = {
  display: ' grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: '1fr',
  gridColumnGap: '0px',
  gridRowGap: '0px'
};

const ulStyle = {
  display: 'flex',
  margin: '6rem'
};
const liStyle = {
  listStyleType: 'none',
  padding: '1rem'
};

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
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Avatar
            src={accountImg}
            className={classes.large}
            style={{ float: 'right' }}
          />
        </li>
        <li style={liStyle}>
          <h1>
            {avtarName}{' '}
            <span style={{ fontSize: '16px', color: '#E0E0E0' }}>
              Front End Developer
            </span>
          </h1>
          <p style={{ float: 'left', margin: '0' }}>
            <strong>{description}</strong>
          </p>
          <p style={{ clear: 'left', float: 'left' }}>
            <PinDropIcon style={{ color: '#006772' }} /> {state}, {country}
          </p>
        </li>
      </ul>
    </Fragment>
  );
}
export default AccountProfile;

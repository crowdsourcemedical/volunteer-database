import React, { Fragment } from 'react';
import { Avatar, makeStyles } from '@material-ui/core';
import PinDropIcon from '@material-ui/icons/PinDrop';

import SocialBtn from './Social-btn.component';

const useStyles = makeStyles(theme => ({
  grid: {
    display: 'grid',
    gridTemplateAreas: 'avatar description break break social-btn',
    gridTemplateColumns: '0.13fr 0.1fr 0.5fr 0.5fr 0.2fr 0.4fr 0.13fr'
  },
  [theme.breakpoints.down('xs')]: {
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'auto',
    gridTemplateAreas: "'title' 'description' 'break' 'social-btn'"
  },
  [theme.breakpoints.down('md')]: {
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'auto',
    gridTemplateAreas: "'title' 'description' 'break' 'social-btn'"
  },
  avatarTitle: {
    textAlign: 'left',
    paddingLeft: '1rem',
    paddingBottom: '2rem'
  },
  sm: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  md: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  },
  lg: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  xl: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  }
}));

function AccountProfile({
  profileName,
  accountImg,
  role,
  description,
  state,
  country
}) {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      <div></div>
      <div>
        <Avatar
          src={accountImg}
          className={classes.xl}
          style={{ float: 'left' }}
        />
      </div>
      <div className={classes.avatarTitle}>
        <h1 style={{ margin: '5px' }}>
          {profileName}{' '}
          <span
            style={{ fontSize: '1rem', color: '#C0C0C0', fontFamily: 'italic' }}
          >
            {role}
          </span>
        </h1>
        <p style={{ margin: '5px' }}>
          {' '}
          <strong>{description}</strong>
        </p>

        <p style={{ margin: '2px' }}>
          <PinDropIcon
            className={classes.sm}
            style={{ color: '#006772', marginLeft: '-5px' }}
          />
          {state}, {country}
        </p>
      </div>
      <div></div>
      <div></div>
      <div style={{ textAlign: 'right' }}>
        <SocialBtn />
      </div>
      <div></div>
    </div>
  );
}
export default AccountProfile;

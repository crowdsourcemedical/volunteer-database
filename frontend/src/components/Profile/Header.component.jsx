import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  grid: {
    display: 'grid',
    gridTemplateAreas: 'title break break account',
    gridTemplateColumns: '0.15fr 0.3fr 0.5fr 0.5fr 0.3fr 0.15fr',
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '100%',
      gridTemplateRows: 'auto',
      gridTemplateAreas: "'title' 'break' 'account'"
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '100%',
      gridTemplateRows: 'auto',
      gridTemplateAreas: "'title' 'break' 'account'"
    }
  },
  title: {
    textAlign: 'right'
  },
  account: {
    textAlign: 'right',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: '2rem',
    marginTop: '1rem'
  }
}));

function Header({ accountImg, logo }) {
  const classes = useStyles();
  return (
    <div style={{ lineHeight: '15rem' }}>
      <header className={classes.grid}>
        <div></div>
        <div className={classes.title}>
          <h3>Crowd Source Solutions</h3>
        </div>
        <div></div>
        <div></div>
        <div className={classes.account}>
          <h3>
            My Account <img src={accountImg} alt='' className={classes.large} />
          </h3>
        </div>
        <div></div>
      </header>
    </div>
  );
}
export default Header;

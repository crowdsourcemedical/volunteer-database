import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  grid: {
    display: 'grid',
    gridTemplateAreas: 'title break account',
    gridTemplateColumns: '1fr 0.2fr 1fr',
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
    alignSelf: 'center',
    paddingLeft: '1.5rem'
  },
  account: {
    paddingRight: '1.5rem',
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
        <div className={classes.title}>
          <h3>Crowd Source Solutions</h3>
        </div>
        <div></div>
        <div className={classes.account}>
          <h3>
            My Account <img src={accountImg} alt='' className={classes.large} />
          </h3>
        </div>
      </header>
    </div>
  );
}
export default Header;

import React from 'react';
import { makeStyles } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import InboxIcon from '@material-ui/icons/Inbox';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  grid: {
    display: 'grid',
    gridTemplateAreas: 'title break break inbox account',
    gridTemplateColumns: '0.09fr 0.3fr 0.5fr 0.15fr 0.2fr 0.09fr',
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
    textAlign: 'left'
  },
  account: {
    textAlign: 'right',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    borderRadius: '2rem',
    marginTop: theme.spacing(13.5),
    marginLeft: theme.spacing(1)
  },
  button: {
    background: '#bdbdbd',
    color: 'black',
    padding: '4px 11px',
    borderRadius: '10rem',
    margin: theme.spacing(1),
    '&:hover': {
      background: '#e0e0e0'
    }
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
            <Button
              variant='contained'
              color='primary'
              size='large'
              className={classes.button}
              startIcon={<InboxIcon />}
            >
              INBOX
            </Button>
          </h3>
        </div>
        <div>
          <Avatar alt='Remy Sharp' src={accountImg} className={classes.large} />
        </div>
        <div></div>
      </header>
    </div>
  );
}
export default Header;

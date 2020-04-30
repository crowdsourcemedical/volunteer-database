import React from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  secondary: {
    backgroundColor: theme.colors.secondaryLight,
  },
}));

export const Follow = ({ mobile, onClick, href }) => {
  const classes = useStyles();

  return (
    (mobile && (
      <Button variant="contained" color="primary" href={href} onClick={onClick}>
        Follow
      </Button>
    )) || (
      <Button variant="contained" color="secondary" className={classes.secondary} href={href} onClick={onClick}>
        Follow
      </Button>
    )
  );
};

export const Join = ({ mobile, onClick, href }) => {
  const classes = useStyles();

  return (
    (mobile && (
      <Button variant="contained" color="primary" href={href} onClick={onClick}>
        Join
      </Button>
    )) || (
      <Button variant="contained" color="secondary" className={classes.secondary} href={href} onClick={onClick}>
        Join
      </Button>
    )
  );
};

export const Contact = ({ onClick, href }) => (
  <Button variant="contained" color="primary" href={href} onClick={onClick}>
    Contact
  </Button>
);

Follow.propTypes = {
  mobile: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
};

Follow.defaultProps = {
  mobile: false,
  onClick: () => {},
  href: '',
};

Join.propTypes = {
  mobile: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
};

Join.defaultProps = {
  mobile: false,
  onClick: () => {},
  href: '',
};

Contact.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string,
};

Contact.defaultProps = {
  onClick: () => {},
  href: '',
};

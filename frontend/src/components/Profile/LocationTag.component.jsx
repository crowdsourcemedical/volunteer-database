import React from 'react';
import PropTypes from 'prop-types';
import { MapPin } from 'react-feather';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  },
  mapPin: {
    fontSize: '2rem',
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
  },
}));

const LocationTag = ({ location }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <MapPin className={classes.mapPin} />
      <Typography variant="body2">{location}</Typography>
    </div>
  );
};

LocationTag.propTypes = {
  location: PropTypes.string.isRequired,
};

export default LocationTag;

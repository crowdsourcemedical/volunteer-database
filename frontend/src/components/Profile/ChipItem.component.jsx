import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';
import { Bookmark } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  chipContainer: {
    display: 'flex',
    padding: theme.spacing(0.5, 1.5),
    margin: theme.spacing(0, 1, 1, 0),
    borderRadius: '4px',
    backgroundColor: theme.colors.whiteGray,
  },
  bookmark: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
    transform: 'rotate(90deg)',
  },
  chipsText: {
    color: theme.colors.gray,
    backgroundColor: theme.colors.whiteGray,
  },
}));

const ChipItem = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.chipContainer}>
      <Bookmark className={classes.bookmark} />
      <Typography variant="body2" className={classes.chipsText}>
        {children}
      </Typography>
    </div>
  );
};

ChipItem.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ChipItem;

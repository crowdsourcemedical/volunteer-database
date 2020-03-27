import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import PeopleFilters from './PeopleFilters';
import ProjectFilters from './ProjectFilters';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.overrides.MuiFilledInput.root.backgroundColor,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  filterSection: {
    backgroundColor: '#f2f2f2',
    padding: theme.spacing(2),
    color: '#000',
    textTransform: 'uppercase',
  },
  divider: {
    height: 37,
    width: '100%',
  },
  typography: {
    fontSize: '12px !important',
  },
}));

const Filters = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.filterSection}>
        <Typography variant="h5" className={classes.typography}>
          People
        </Typography>
        <PeopleFilters />
      </div>
      <div className={classes.divider} />
      <div className={classes.filterSection}>
        <Typography variant="h5" className={classes.typography}>
          Projects
        </Typography>
        <ProjectFilters />
      </div>
    </div>
  );
};

export default Filters;

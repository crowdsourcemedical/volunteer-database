import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  grid: {
    display: 'grid',
    gridTemplateAreas: '. title . .',
    gridTemplateColumns: '0.15fr 1fr 0.15fr',
    gridTemplateRows: '1fr'
  }
}));

const Project = () => {
  const classes = useStyles();
  return (
    <div className={classes.grid}>
      <div></div>
      <div className={classes.borderBottom}>
        <h1 className={classes.alignLeft}>Project</h1>
      </div>
      <div></div>
    </div>
  );
};

export default Project;

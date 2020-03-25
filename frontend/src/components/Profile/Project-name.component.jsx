import React from 'react';

import CardProject from './Card-Project.component';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345
  },
  gridMain: {
    display: 'grid',
    gridTemplateAreas: '. title . .',
    gridTemplateColumns: '0.08fr 1.1fr 0.08fr',
    gridTemplateRows: '1fr'
  },
  gridProject: {
    paddingTop: '1rem',
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))'
  },
  media: {
    height: 140
  }
}));

const ProjectName = ({ img }) => {
  const classes = useStyles();
  return (
    <div className={classes.gridMain}>
      <div></div>
      <div className={classes.gridProject}>
        <CardProject img={img} />
        <CardProject img={img} />
        <CardProject img={img} />
        <CardProject img={img} />
        <CardProject img={img} />
        <CardProject img={img} />
        <CardProject img={img} />
        <CardProject img={img} />
        <CardProject img={img} />
        <CardProject img={img} />
      </div>
      <div></div>
    </div>
  );
};

export default ProjectName;

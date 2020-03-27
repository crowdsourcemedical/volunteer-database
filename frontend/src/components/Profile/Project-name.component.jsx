import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

import CardProject from './Card-Project.component';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  gridMain: {
    display: 'grid',
    gridTemplateAreas: '. title . .',
    gridTemplateColumns: '0.08fr 1.1fr 0.08fr',
    gridTemplateRows: '1fr',
  },
  gridProject: {
    paddingTop: '1rem',
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
  },
  media: {
    height: 140,
  },
}));

const ProjectName = ({ img }) => {
  const classes = useStyles();
  return (
    <div className={classes.gridMain}>
      <div />
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
      <div />
    </div>
  );
};

ProjectName.propTypes = {
  img: PropTypes.string.isRequired,
};

export default ProjectName;

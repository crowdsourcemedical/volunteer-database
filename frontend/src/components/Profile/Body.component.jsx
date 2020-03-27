import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

// Profile Components
import Description from './Description.component';
import Tags from './Tags.component';

const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateAreas: '. description tags .',
    gridTemplateColumns: '0.15fr 1fr 1fr 0.15fr',
    gridTemplateRows: '1fr',
  },
  borderTop: {
    borderTop: '1px solid grey',
  },
});

function Body({ txt, icon, label }) {
  const classes = useStyles();
  return (
    <main className={classes.grid}>
      <div />
      <div className={classes.borderTop}>
        <Description txt={txt} />
      </div>
      <div className={classes.borderTop} style={{ padding: '0.7rem 0' }}>
        <Tags icon={icon} label={label} />
      </div>
      <div />
    </main>
  );
}

Body.propTypes = {
  txt: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default Body;

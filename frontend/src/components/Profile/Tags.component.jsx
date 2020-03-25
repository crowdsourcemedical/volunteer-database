import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& > *': {
      margin: theme.spacing(0.5),
      borderRadius: '5px'
    }
  }
}));

export default function Tags({ icon, label }) {
  const classes = useStyles();

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      <Chip icon={icon} label={label} onClick={handleClick} />
      <Chip icon={icon} label={label} onClick={handleClick} />
      <Chip icon={icon} label={label} onClick={handleClick} />
      <Chip icon={icon} label={label} onClick={handleClick} />
      <Chip icon={icon} label={label} onClick={handleClick} />
      <Chip icon={icon} label={label} onClick={handleClick} />
      <Chip icon={icon} label={label} onClick={handleClick} />
    </div>
  );
}

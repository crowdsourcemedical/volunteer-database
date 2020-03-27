import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '1em 0px',
    float: 'right',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function SmallChips() {
  const classes = useStyles();

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      <Chip size="medium" label="Clickable Link" component="a" href="#chip" clickable onClick={handleClick} />
      <Chip size="medium" label="Clickable Link" component="a" href="#chip" clickable onClick={handleClick} />
      <Chip size="medium" label="Clickable Link" component="a" href="#chip" clickable onClick={handleClick} />
      <Chip size="medium" label="Clickable Link" component="a" href="#chip" clickable onClick={handleClick} />
      <Chip size="medium" label="Clickable Link" component="a" href="#chip" clickable onClick={handleClick} />
      <Chip size="medium" label="Clickable Link" component="a" href="#chip" clickable onClick={handleClick} />
      <Chip size="medium" label="Clickable Link" component="a" href="#chip" clickable onClick={handleClick} />
    </div>
  );
}

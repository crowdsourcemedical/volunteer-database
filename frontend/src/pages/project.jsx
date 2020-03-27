import React from 'react';
import {
  Grid, Typography, Divider, Hidden, Button,
} from '@material-ui/core';
import { MapPin, Bookmark } from 'react-feather';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: '0 auto',
    '& > *': {
      margin: theme.spacing(2, 0),
    },
  },
  container: {
    '& > *': {
      marginRight: theme.spacing(3),
    },
  },
  profile: {
    display: 'flex',
    marginRight: 'auto',
    alignItems: 'center',
  },
  img: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: '#c4c4c4',
    marginRight: theme.spacing(2),
  },
  mapPin: {
    fontSize: '2rem',
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
  },
  locContainer: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  },
  chipConatiner: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chips: {
    display: 'flex',
    padding: theme.spacing(0.5, 1.5),
    margin: theme.spacing(0, 1, 1, 0),
    borderRadius: '4px',
    backgroundColor: theme.colors.whiteGray,
  },
  desc: {
    color: theme.colors.gray,
  },
  secondary: {
    backgroundColor: theme.colors.secondaryLight,
  },
  bookmark: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
    transform: 'rotate(90deg)',
  },
}));

const Project = () => {
  const classes = useStyles();

  // TODO :- replace this data with data from backend API
  const project = {
    name: 'ER Restock',
    contibutersNeeded: '3',
    location: 'Massachussetts, USA',
    description:
      'I’m an ER doctor in Western Massachussetts. We need 20 prints of the Prusa Protective Face Shield - RC2 asap. Print material needs to be sturdy enough to be decontaminated regularly. I’m thinking ABS, PETG, or nylon? Bonus karma if you can also provide the laser cut clear portion - they used 0.5mm thick petg sheet (Covestro VIVAK).',
    lookingFor: [
      'Registered Nurse',
      'Registered Nurse',
      'Registered Nurse',
      'Other tag',
      'Frontend Engineer',
      'Something Different',
      'Job Title',
      'Another Job Title',
      'Engineer',
    ],
  };

  return (
    <Grid container className={classes.root} xs={12} sm={8} direction="column">
      <Grid container className={classes.container} justify="flex-end" direction="row" alignItems="center">
        <div className={classes.profile}>
          {/* // TODO :- remove the div and uncomment the img, when getting pic from backend API */}
          <div className={classes.img} />
          {/* <img src="" alt="Profile Picture"/> */}

          <Grid item>
            {/* Project Header */}
            <Hidden xsDown>
              <Typography variant="h2">{project.name}</Typography>
            </Hidden>
            {/* Project Header (mobile) */}
            <Hidden smUp>
              <Typography variant="h4">{project.name}</Typography>
            </Hidden>
            <Typography variant="body1">{`Needs ${project.contibutersNeeded} more contributers`}</Typography>
            <div className={classes.locContainer}>
              <MapPin className={classes.mapPin} />
              <Typography variant="body2">{project.location}</Typography>
            </div>
          </Grid>
        </div>
        <Hidden smDown>
          <Button variant="contained" color="secondary" className={classes.secondary}>
            Join
          </Button>
        </Hidden>
        <Hidden smDown>
          <Button variant="contained" color="primary">
            Contact
          </Button>
        </Hidden>
      </Grid>
      <Divider />
      <Typography variant="h2">Description</Typography>
      <Typography variant="body1" className={classes.desc}>
        {project.description}
      </Typography>
      <Typography variant="h2">Looking for</Typography>
      <div className={classes.chipConatiner}>
        {project.lookingFor.map((text) => (
          <div className={classes.chips}>
            <Bookmark className={classes.bookmark} />
            <Typography variant="body2" className={classes.desc}>
              {text}
            </Typography>
          </div>
        ))}
      </div>
      <Hidden mdUp>
        <Button variant="contained" color="primary">
          Join
        </Button>
      </Hidden>
      <Hidden mdUp>
        <Button variant="contained" color="primary">
          Contact
        </Button>
      </Hidden>
    </Grid>
  );
};

export default Project;

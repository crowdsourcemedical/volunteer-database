import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Divider, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ProfileImage from './ProfileImage.component';
import ProfileHeader from './ProfileHeader.component';
import { Join, Contact } from './ProfileButtons.component';
import ChipItem from './ChipItem.component';
import LocationTag from './LocationTag.component';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: '0 auto',
    '& > *': {
      margin: theme.spacing(2, 0),
    },
    maxWidth: '1270px',
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
  chipsListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  description: {
    color: theme.colors.gray,
  },
}));

const ProjectProfile = ({ data }) => {
  const classes = useStyles();

  const { name, description, lookingFor, location, contributersNeeded } = data;

  return (
    <Grid container className={classes.root} direction="column">
      <Grid container className={classes.container} justify="flex-end" direction="row" alignItems="center">
        <div className={classes.profile}>
          {/* // TODO :- update image src with project profile image received from backend API */}
          <ProfileImage src="" />

          <Grid item>
            <ProfileHeader>{name}</ProfileHeader>

            <Typography variant="body1">{`Needs ${contributersNeeded} more contributers`}</Typography>

            <LocationTag location={location} />
          </Grid>
        </div>
        <Hidden smDown>
          {/* TODO: Pass onClick or href as prop to Join/Contact Buttons */}
          <Join />
          <Contact />
        </Hidden>
      </Grid>

      <Divider />

      <Typography variant="h2">Description</Typography>
      <Typography variant="body1" className={classes.description}>
        {description}
      </Typography>

      <Typography variant="h2">Looking for</Typography>
      <div className={classes.chipsListContainer}>
        {lookingFor.map((text, index) => (
          <ChipItem key={index}>{text}</ChipItem>
        ))}
      </div>

      <Hidden mdUp>
        {/* TODO: Pass onClick or href as prop to Join/Contact Buttons (mobile) */}
        <Join mobile />
        <Contact mobile />
      </Hidden>
    </Grid>
  );
};

ProjectProfile.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectProfile;

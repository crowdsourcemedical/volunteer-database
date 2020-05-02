import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Divider, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ProjectsList from './ProjectsList.component';
import ProfileImage from './ProfileImage.component';
import ProfileHeader from './ProfileHeader.component';
import { Follow, Contact } from './ProfileButtons.component';
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
  profileHeader: {
    alignItems: 'baseline',
    justifyItems: 'space-around',
  },
  chipsListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  description: {
    color: theme.colors.gray,
    backgroundColor: theme.colors.whiteGray,
    padding: 10,
    margin: theme.spacing(0, 4, 4, 0),
  },
  role: {
    color: theme.palette.text.secondary,
    textTransform: 'capitalize',
    lineHeight: '140%',
    marginLeft: 10,
  },
  roleMobile: {
    color: theme.palette.text.secondary,
    textTransform: 'capitalize',
    lineHeight: '140%',
    fontSize: 18,
  },
  mobileContributions: {
    color: 'black',
    fontSize: 12,
    marginTop: 5,
    lineHeight: '140%',
    textAlign: 'center',
  },
}));

const UserProfile = ({ data }) => {
  const classes = useStyles();

  const { projects, skills } = data;
  const name = `${data.user_first} ${data.user_last}`;
  const location = data.user_location;
  const description = data.user_description;
  const role = data.user_skill;
  const avatarSrc = data.user_profile_picture;

  return (
    <Grid container className={classes.root} direction="column">
      <Grid container className={classes.container} justify="flex-end" direction="row" alignItems="center">
        <div className={classes.profile}>
          <ProfileImage src={avatarSrc} />

          <Grid item>
            {/* Profile Header */}
            <Grid container direction="row" className={classes.profileHeader}>
              <ProfileHeader>{name}</ProfileHeader>
              {/* User Role/Primary Skill */}
              <Hidden xsDown>
                <Typography variant="body1" className={classes.role}>
                  {role}
                </Typography>
              </Hidden>
            </Grid>

            <Hidden xsDown>
              <Typography variant="body1">{`Contributes to ${projects.length} active projects`}</Typography>
            </Hidden>
            <Hidden smUp>
              <Typography variant="body1" className={classes.roleMobile}>
                {role}
              </Typography>
            </Hidden>

            <LocationTag location={location} />
          </Grid>
        </div>
        <Hidden smDown>
          {/* TODO: Pass onClick or href as prop to Follow/Contact Buttons */}
          <Follow />
          <Contact />
        </Hidden>
      </Grid>
      <Grid item>
        <Divider />
        <Hidden smUp>
          <Typography variant="body1" className={classes.mobileContributions}>
            {`Contributes to ${projects.length} active projects`}
          </Typography>
        </Hidden>
      </Grid>

      <Grid item>
        <Grid container>
          <Grid item sm={12} md={6}>
            <Hidden mdUp>
              <Typography variant="body1" className={classes.description}>
                {description}
              </Typography>
            </Hidden>
            <Hidden smDown>
              <Typography variant="body1" className={classes.description} style={{ minHeight: 200 }}>
                {description}
              </Typography>
            </Hidden>
          </Grid>
          <Grid item sm={12} md={6}>
            <div className={classes.chipsListContainer}>
              {skills.map((skill, index) => {
                const skillName = skill.skill_name;
                return <ChipItem key={index}>{skillName}</ChipItem>;
              })}
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Typography variant="h2">Projects</Typography>
      <ProjectsList projects={projects} />

      <Hidden mdUp>
        {/* TODO: Pass onClick or href as prop to Follow/Contact Buttons (mobile) */}
        <Follow mobile />
        <Contact mobile />
      </Hidden>
    </Grid>
  );
};

UserProfile.propTypes = {
  data: PropTypes.object.isRequired,
};

export default UserProfile;

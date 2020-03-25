import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core/"
import { MapPin } from 'react-feather';

import theme from "../../styles/theme";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: 'auto',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  img: {
    borderRadius: '100%',
    width: 60,
    height: 60,
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(1),
  },
  infoContainer: {
    paddingLeft: theme.spacing(1),
  },
  heading: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name: {
    paddingRight: theme.spacing(1),
    color: '#000',
    whiteSpace: 'nowrap',
  },
  jobTitle: {
    color: '#828282',
  },
  jobTitleText: {
    fontSize: '12px !important',
    whiteSpace: 'nowrap',
  },
  description: {
    color: '#000',
    lineHeight: '140%',
    width: '100%',
  },
  descriptionText: {
    fontSize: '16px !important',
  },
  location: {
    color: '#000',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  locationIcon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
  }
}));

const PersonResult = ({ name, jobTitle, description, location, imgSrc }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      alignContent="center"
      justify="center"
      spacing={1}
      className={classes.root}
    >
      <Grid item xs={3}>
        <div className={classes.imgContainer}>
          <img src={imgSrc} className={classes.img} />
        </div>
      </Grid>
      <Grid item xs={9} className={classes.infoContainer}>
        <div className={classes.heading}>
          <div className={classes.name}>
            <Typography variant="h5">
              {name}
            </Typography>
          </div>
          <div className={classes.jobTitle}>
            <Typography variant="h6" className={classes.jobTitleText}>
              {jobTitle}
            </Typography>
          </div>
        </div>
        <div className={classes.description}>
          <Typography className={classes.descriptionText}>
            {description}
          </Typography>
        </div>
        <div className={classes.location}>
          <MapPin size={14} className={classes.locationIcon} fill={theme.palette.primary.main} strokeWidth={2} />
          <Typography>
            {location}
          </Typography>
        </div>
      </Grid>
    </Grid>
  )
}

PersonResult.propTypes = {
  name: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imgSrc: PropTypes.any,
}

export default PersonResult;
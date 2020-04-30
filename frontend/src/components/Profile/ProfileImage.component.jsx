import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: '120px',
    height: '120px',
    marginRight: theme.spacing(2),
  },
}));

const ProfileImage = ({ src }) => {
  const classes = useStyles();

  return <Avatar src={src} className={classes.avatar} />;
};

ProfileImage.propTypes = {
  src: PropTypes.string,
};

ProfileImage.defaultProps = {
  src: '',
};

export default ProfileImage;

import React from 'react';
import PropTypes from 'prop-types';
import { Hidden, Typography } from '@material-ui/core';

const ProfileHeader = ({ children }) => (
  <>
    <Hidden xsDown>
      <Typography variant="h2">{children}</Typography>
    </Hidden>
    {/* (mobile) */}
    <Hidden smUp>
      <Typography variant="h4">{children}</Typography>
    </Hidden>
  </>
);

ProfileHeader.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ProfileHeader;

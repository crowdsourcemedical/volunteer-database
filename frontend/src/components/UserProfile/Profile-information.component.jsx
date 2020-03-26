import React from 'react';
import PropTypes from 'prop-types';

// None Material UI Components
import Avatar from './Avatar.component.jsx';

export const ProfileDescription = ({ classes, description, username }) => (
  <>
    <div className={classes} />
    <Avatar />

    <p>
      <strong>John Doe {username}</strong>
    </p>
    <h5>Description</h5>
    <p>
      {description}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni beatae velit hic autem veniam, commodi nulla cum
      laboriosam! Expedita, aliquid!
    </p>
  </>
);

ProfileDescription.propTypes = {
  classes: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

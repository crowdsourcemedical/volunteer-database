import React, { Fragment } from 'react';

// None Material UI Components
import Avatar from './Avatar.component.jsx';

export const ProfileDescription = ({ classes, description, username }) => (
  <Fragment>
    <div className={classes} />
    <Avatar />

    <p>
      <strong>John Doe {username}</strong>
    </p>
    <h5>Description</h5>
    <p>
      {description}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni beatae
      velit hic autem veniam, commodi nulla cum laboriosam! Expedita, aliquid!
    </p>
  </Fragment>
);

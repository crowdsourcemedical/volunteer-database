import React, { Fragment } from 'react';

const ContactInformation = ({ title }) => (
  <Fragment>
    <h1>{title}</h1>
    <p> We're able to send supplies and help and help within these regions.</p>
  </Fragment>
);

const Notification = ({ title }) => (
  <Fragment>
    <h1>{title}</h1>
    <p>
      We'll try to connect you with the kind of talent you need andare looking
      for.
    </p>
  </Fragment>
);

export { ContactInformation, Notification };

import React from 'react';

const ContactInformation = ({ title }) => (
  <section>
    <h1>{title}</h1>
    <p> We're able to send supplies and help and help within these regions.</p>
  </section>
);

const Notification = ({ title }) => (
  <section>
    <h1>{title}</h1>
    <p>
      We'll try to connect you with the kind of talent you need andare looking
      for.
    </p>
  </section>
);

export { ContactInformation, Notification };

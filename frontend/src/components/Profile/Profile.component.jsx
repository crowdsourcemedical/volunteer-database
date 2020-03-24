import React, { Component, Fragment } from 'react';

// Profile Components
import Header from './Header.component.jsx';
import AccountProfile from './Avatar.component';

class Profile extends Component {
  state = {
    logo: './src/img/crown-source-logo.svg',
    profileName: 'John Doe',
    role: 'Frontend Developer',
    avatarURL: 'https://material-ui.com/static/images/avatar/1.jpg',
    description: 'Contributers To 3 Active Projects',
    state: 'New York',
    country: 'USA'
  };

  render() {
    const {
      profileName,
      avatarURL,
      description,
      logo,
      role,
      state,
      country
    } = this.state;
    return (
      <Fragment>
        <Header accountImg={avatarURL} logo={logo} />
        <AccountProfile
          accountImg={avatarURL}
          profileName={profileName}
          role={role}
          description={description}
          state={state}
          country={country}
        />
      </Fragment>
    );
  }
}

export default Profile;

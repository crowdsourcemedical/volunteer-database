import React, { Component, Fragment } from 'react';

// Profile Components
import Header from './Header.component.jsx';
import AccountProfile from './Account-profile.component';

class Profile extends Component {
  state = {
    logo: './src/img/crown-source-logo.svg',
    avtarName: 'John Doe',
    avatarURL: 'https://material-ui.com/static/images/avatar/1.jpg',
    description: 'Contributers To 3 Active Projects',
    state: 'New York',
    country: 'USA'
  };

  render() {
    const {
      avtarName,
      avatarURL,
      description,
      logo,
      state,
      country
    } = this.state;
    return (
      <Fragment>
        <Header accountImg={avatarURL} logo={logo} />
        {/* <AccountProfile
          avtarName={avtarName}
          accountImg={avatarURL}
          description={description}
          state={state}
          country={country}
        /> */}
      </Fragment>
    );
  }
}

export default Profile;

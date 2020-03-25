import React, { Component, Fragment } from 'react';

// Material UI Components
import LabelIcon from '@material-ui/icons/Label';

// Profile Components
//import Header from './Header.component.jsx';
import AccountProfile from './Avatar.component';
import Body from './Body.component';
import ProjectTitle from './Project-title.component';
import ProjectName from './Project-name.component';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: './src/img/crown-source-logo.svg',
      profileName: 'John Doe',
      role: 'Frontend Developer',
      avatarURL: 'https://material-ui.com/static/images/avatar/1.jpg',
      description: 'Contributers To 3 Active Projects',
      state: 'New York',
      country: 'USA',
      descriptionTxt:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, in! Culpa sequi, ipsum, cupiditate illum laboriosam, exercitationem odit adipisci numquam itaque atque animi. Soluta architecto eos ab necessitatibus aperiam voluptatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, in! Culpa sequi, ipsum, cupiditate illum laboriosam, exercitationem odit adipisci numquam itaque atque animi. Soluta architecto eos ab necessitatibus aperiam voluptatibus.',
      labelIcon: <LabelIcon />,
      label: 'Other Label',
      projectImg:
        'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
    };
  }

  render() {
    const {
      profileName,
      avatarURL,
      description,
      logo,
      role,
      state,
      country,
      descriptionTxt,
      labelIcon,
      label,
      projectImg,
    } = this.state;
    return (
      <>
        {/* <Header accountImg={avatarURL} logo={logo} /> */}
        <AccountProfile
          accountImg={avatarURL}
          profileName={profileName}
          role={role}
          description={description}
          state={state}
          country={country}
        />
        <Body txt={descriptionTxt} icon={labelIcon} label={label} />
        <ProjectTitle />
        <ProjectName img={projectImg} />
      </>
    );
  }
}

export default Profile;

import React from 'react';

import UserProfile from '../components/Profile/UserProfile.component';

const UserProfilePage = () => {
  // TODO :- replace this data with data from backend API
  const userData = {
    user_id: 1,
    user_email: 'john.doe@gmail.com',
    user_first: 'John',
    user_last: 'Doe',
    user_skill: 'Frontend Developer',
    user_description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, in! Culpa sequi, ipsum, cupiditate illum laboriosam, exercitationem odit adipisci numquam itaque atque animi. Soluta architecto eos ab necessitatibus aperiam voluptatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, in! Culpa sequi, ipsum, cupiditate illum laboriosam, exercitationem odit adipisci numquam itaque atque animi. Soluta architecto eos ab necessitatibus aperiam voluptatibus.',
    user_profile_picture: 'https://material-ui.com/static/images/avatar/1.jpg',
    user_location: 'New York, USA',
    user_is_active: true,
    user_is_medical_professional: false,
    user_is_verified: true,
    user_is_volunteer: true,
    projects: [
      {
        project_title: 'Project 1',
        project_description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptate fugiat deserunt possimus',
        project_image: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
      },
      {
        project_title: 'Project 2',
        project_description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptate fugiat deserunt possimus',
        project_image: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
      },
      {
        project_title: 'Project 3',
        project_description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptate fugiat deserunt possimus',
        project_image: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
      },
      {
        project_title: 'Project 4',
        project_description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptate fugiat deserunt possimus',
        project_image: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
      },
      {
        project_title: 'Project 5',
        project_description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptate fugiat deserunt possimus',
        project_image: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
      },
    ],
    skills: [
      { skill_id: 1, skill_name: 'WordPress' },
      { skill_id: 2, skill_name: 'ES6' },
      { skill_id: 3, skill_name: 'React' },
      { skill_id: 4, skill_name: 'CSS' },
      { skill_id: 5, skill_name: 'Docker' },
      { skill_id: 6, skill_name: 'SQL' },
    ],
  };

  return <UserProfile data={userData} />;
};

export default UserProfilePage;

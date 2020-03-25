import React from 'react';
import {
  Typography,
} from '@material-ui/core';

import AboutImg from '../images/about.png';

const AboutPage = () => (
  <div>
    <div className="landingAbout">
      <div className="heroAbout" />
      <div className="heroCover" />
      <div className="heroContent">
        <Typography className="heroHeader">Do Something Great</Typography>
        <div className="heroText">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            {' '}
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Typography>
        </div>
        <div className="heroButtons">
          <button className="greenAboutButton">Submit a Project</button>
          <button className="purpleAboutButton">Become a Volunteer</button>
        </div>
      </div>
    </div>

    <div className="aboutInformationWrapper">
      <div className="aboutTextWrapper">
        <Typography className="aboutHeader">Project Information</Typography>
        <div className="aboutText">
          <Typography>
            Regulated medical devices are the purview of the Food and Drug
            Administration. Any designer or manufacturer producing items
            claiming to prevent, diagnose, treat, or cure a medical
            condition are under their jurisdiction and subject to premarket
            approval. Punishments are wide-ranging but our recommendation is
            to avoid them altogether.
            <br />
            <br />
            Words like “medical”, “protect”, and “hostpital” are going to
            put you at risk. Indicating your mask is for a non-medical
            purpose is not recommended, because the intent of this effort is
            clear to authorities. When packaging, distrubting, or discussing
            these produced materials, we recommend using plain boxes
            wherever possible, including no claims or disclaimers.
          </Typography>
        </div>
      </div>
      <div className="aboutImage">
        <img className="aboutImageF" src={AboutImg} alt="about_image" />
      </div>
    </div>
  </div>

);

export default AboutPage;

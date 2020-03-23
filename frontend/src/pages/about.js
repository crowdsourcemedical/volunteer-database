import React, { Component } from "react";

import HeroImg from "../images/hero.png";
import AboutImg from "../images/about.png";

export default class AboutPage extends Component {
  render() {
    return (
      <>
        <div className="landingAbout">
          <div className="heroAbout"></div>
          <div className="heroCover"></div>
          <div className="heroContent">
            <div className="heroHeader">Do Something Great</div>
            <div className="heroText">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. <br />
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </div>
            </div>
            <div className="heroButtons">
              <button className="greenAboutButton">Submit a Project</button>
              <button className="purpleAboutButton">Become a Volunteer</button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>Project Information</div>
              <div>
                Est ultricies integer quis auctor elit sed. Nec ultrices dui
                sapien eget mi proin sed. In pellentesque massa placerat duis.
                Senectus et netus et malesuada fames ac turpis egestas integer.
                Eu mi bibendum neque egestas congue quisque egestas. Sed lectus
                vestibulum mattis ullamcorper velit sed. Turpis cursus in hac
                habitasse platea dictumst quisque sagittis purus. Habitant morbi
                tristique senectus et netus et.
              </div>
              <div>
                Ut lectus arcu bibendum at varius vel. Ac tincidunt vitae semper
                quis lectus nulla at. Rutrum tellus pellentesque eu tincidunt
                tortor aliquam nulla facilisi cras. Lectus urna duis convallis
                convallis tellus id interdum velit laoreet. Sit amet tellus cras
                adipiscing enim eu turpis egestas. Placerat vestibulum lectus
                mauris ultrices eros in. Sagittis orci a scelerisque purus
                semper eget.
              </div>
            </div>
            <div>
              <img src={AboutImg}></img>
            </div>
          </div>
        </div>
        <div>
          <div>The Team</div>
        </div>
      </>
    );
  }
}

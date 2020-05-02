import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import CardProject from './CardProject.component';

// List of projects for User Profiles
const ProjectsList = ({ projects }) => {
  return (
    <Grid container justify="flex-start">
      {projects.map((project, index) => {
        const title = project.project_title;
        const description = project.project_description;
        const img = project.project_image;
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ padding: '0 1rem 1rem 0' }} key={index}>
            <CardProject title={title} description={description} img={img} />
          </Grid>
        );
      })}
    </Grid>
  );
};

ProjectsList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectsList;

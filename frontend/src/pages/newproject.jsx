import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box, Typography, Grid, Button,
} from '@material-ui/core';

import CheckBoxSection from '../components/Forms/checkboxSection';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(),
      width: '25ch',
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const checkboxesCad = [
  { label: 'Solid Works', status: false },
  { label: 'Inventor', status: false },
]; // pass this to a checkboxsection to output all checkbox labels -> status is if its disabled or enabled
const checkboxesMedical = [
  { label: 'Registered Nurse', status: false },
  { label: 'Physician Assistant', status: false },
  { label: 'Medical Student', status: false },
  { label: 'Intern', status: true },
  { label: 'Resident', status: false },
  { label: 'Attending', status: true },
]; // pass this to a checkboxsection to output all checkbox labels -> status is if its disabled or enabled
const checkboxesEng = [
  { label: 'Mechanical Engineer', status: false },
  { label: 'Mechanical Engineer with FEA experience', status: false },
  { label: 'Electrical Engineer', status: true },
  { label: 'Mechatronics Engineer', status: false },
]; // pass this to a checkboxsection to output all checkbox labels -> status is if its disabled or enabled
const checkboxesLegal = [
  { label: 'Lawyer', status: false },
  { label: 'Barrister', status: false },
  { label: 'paralegal', status: false },
];
const checkboxesManu = [
  { label: 'FDM 3D printer', status: false },
  { label: 'SLA 3D printer', status: false },
  { label: 'SLS Nylon 3D printer', status: false },
  { label: 'Machinist', status: true },
];
// TODO: populate the above with an API call to see which professions are avaliable and not avaliable

function NewProject() {
  const [description, setDescription] = useState('');
  const [, setLocation] = useState('');

  const changeMap = {
    description: setDescription,
    location: setLocation,
  };

  function handleCheckBoxChange(event) {
    global.console.log(event);
    // TODO: GET CHECKBOX data from child component onChange
  }

  function handleChange(event) {
    changeMap[event.target.name](event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} />
      <Grid container justify="center">
        {/* Main Page Content */}
        <Grid item xs={8} lg={4} xl={4}>
          <Typography variant="h3">Welcome to Crowd Sourced Medical</Typography>
        </Grid>
      </Grid>
      <Box m={6} />

      <Grid container justify="center">
        <Grid item xs={12} lg={8} xl={8}>
          <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
            <Typography color="primary" variant="h4">
              Tell us about your project.
            </Typography>
            {' '}
            <br />
          </Grid>
          <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
            <Typography variant="h6">
              What's the problem and what are you looking for our volunteers to
              help with?
            </Typography>
          </Grid>
          <form className={useStyles.root} noValidate autoComplete="off">
            <TextField
              name="description"
              multiline
              rows={10}
              fullWidth
              size="large"
              label="Description"
              variant="outlined"
              value={description}
              onChange={handleChange}
            />
            <Box m={5} />
            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
              <Typography
                id="legal_recomendations"
                color="primary"
                variant="subtitle1"
              >
                {' '}
                Please read the recomendatiosn from our Legal
                {' '}
              </Typography>
              <Box m={3} />
            </Grid>
            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
              <TextField
                name="location"
                label="Location"
                onChange={handleChange}
              />
              <Box m={5} />
            </Grid>
            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
              <Typography variant="h5">
                Request Team Members and Advisors
              </Typography>
              <Box m={5} />
            </Grid>

            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
              <CheckBoxSection
                right
                sectionHeader="Medical Staff advisers"
                checkboxes={checkboxesMedical}
                cb={handleCheckBoxChange}
              />
            </Grid>
            <Box m={5} />
            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
              <CheckBoxSection
                right
                sectionHeader="Engineering"
                checkboxes={checkboxesEng}
                cb={handleCheckBoxChange}
              />
            </Grid>
            <Box m={5} />

            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
              <CheckBoxSection
                right
                sectionHeader="CAD professionals"
                checkboxes={checkboxesCad}
                cb={handleCheckBoxChange}
              />
            </Grid>
            <Box m={2} />
            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
              <CheckBoxSection
                sectionHeader="Legal advisors"
                checkboxes={checkboxesLegal}
                cb={handleCheckBoxChange}
              />
            </Grid>
            <Box m={2} />
            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
              <CheckBoxSection
                sectionHeader="Manufactures"
                checkboxes={checkboxesManu}
                cb={handleCheckBoxChange}
              />
            </Grid>
            <Box m={3} />
            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
              <Button
                onClick={handleSubmit}
                variant="contained"
                size="large"
                color="primary"
                className={useStyles.margin}
              >
                Submit project
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
      {/* Footer */}
      <Grid item xs={12} />
      {/* End Main Page Content */}
    </Grid>
  );
}

export default NewProject;

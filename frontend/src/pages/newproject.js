import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";

import CheckBoxSection from "../components/Forms/checkboxSection.js";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(),
      width: "25ch"
    }
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

export default class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", profsRequired: [], location: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  }

  handleCheckBoxChange(event) {
    //TODO: GET CHECKBOX data from child component onChange
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    //TODO: HANDLE submit
    event.preventDefault();
  }
  checkboxesCad = [
    { label: "Solid Works", status: false },
    { label: "Inventor", status: false }
  ]; // pass this to a checkboxsection to output all checkbox labels -> status is if its disabled or enabled
  checkboxesMedical = [
    { label: "Registered Nurse", status: false },
    { label: "Physician Assistant", status: false },
    { label: "Medical Student", status: false },
    { label: "Intern", status: true },
    { label: "Resident", status: false },
    { label: "Attending", status: true }
  ]; // pass this to a checkboxsection to output all checkbox labels -> status is if its disabled or enabled
  checkboxesEng = [
    { label: "Mechanical Engineer", status: false },
    { label: "Mechanical Engineer with FEA experience", status: false },
    { label: "Electrical Engineer", status: true },
    { label: "Mechatronics Engineer", status: false }
  ]; // pass this to a checkboxsection to output all checkbox labels -> status is if its disabled or enabled
  checkboxesLegal = [
    { label: "Lawyer", status: false },
    { label: "Barrister", status: false },
    { label: "paralegal", status: false }
  ];
  checkboxesManu = [
    { label: "FDM 3D printer", status: false },
    { label: "SLA 3D printer", status: false },
    { label: "SLS Nylon 3D printer", status: false },
    { label: "Machinist", status: true }
  ];
  //TODO: populate the above with an API call to see which professions are avaliable and not avaliable

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} />
        <Grid container justify="center">
          {/* Main Page Content */}
          <Grid item xs={8} lg={4} xl={4}>
            <Typography variant="h3">
              Welcome to Crowd Sourced Medical
            </Typography>
          </Grid>
        </Grid>
        <Box m={6} />

        <Grid container justify="center">
          <Grid item xs={12} lg={8} xl={8}>
            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
              <Typography color="primary" variant="h4">
                Tell us about your project.
              </Typography>{" "}
              <br></br>
            </Grid>
            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
              <Typography variant="h6">
                What's the problem and what are you looking for our volunteers
                to help with?
              </Typography>
            </Grid>
            <form className={useStyles.root} noValidate autoComplete="off">
              <TextField
                name="description"
                multiline={true}
                rows={10}
                fullWidth={true}
                size="large"
                label="Description"
                variant="outlined"
                value={this.state.description}
                onChange={this.handleChange}
              />
              <Box m={5} />
              <Grid
                container
                alignItems="flex-start"
                item
                xs={12}
                lg={8}
                xl={8}
              >
                <Typography
                  id="legal_recomendations"
                  color="primary"
                  variant="subtitle1"
                >
                  {" "}
                  Please read the recomendatiosn from our Legal{" "}
                </Typography>
                <Box m={3} />
              </Grid>
              <Grid
                container
                alignItems="flex-start"
                item
                xs={12}
                lg={8}
                xl={8}
              >
                <TextField
                  name="location"
                  label="Location"
                  onChange={this.handleChange}
                />
                <Box m={5} />
              </Grid>
              <Grid
                container
                alignItems="flex-start"
                item
                xs={12}
                lg={8}
                xl={8}
              >
                <Typography variant="h5">
                  Request Team Members and Advisors
                </Typography>
                <Box m={5} />
              </Grid>

              <Grid
                container
                alignItems="flex-start"
                item
                xs={12}
                lg={8}
                xl={8}
              >
                <CheckBoxSection
                  right
                  sectionHeader={"Medical Staff advisers"}
                  checkboxes={this.checkboxesMedical}
                  cb={this.handleCheckBoxChange}
                ></CheckBoxSection>
              </Grid>
              <Box m={5} />
              <Grid
                container
                alignItems="flex-start"
                item
                xs={12}
                lg={8}
                xl={8}
              >
                <CheckBoxSection
                  right
                  sectionHeader={"Engineering"}
                  checkboxes={this.checkboxesEng}
                  cb={this.handleCheckBoxChange}
                ></CheckBoxSection>
              </Grid>
              <Box m={5} />

              <Grid
                container
                alignItems="flex-start"
                item
                xs={12}
                lg={8}
                xl={8}
              >
                <CheckBoxSection
                  right
                  sectionHeader={"CAD professionals"}
                  checkboxes={this.checkboxesCad}
                  cb={this.handleCheckBoxChange}
                ></CheckBoxSection>
              </Grid>
              <Box m={2} />
              <Grid
                container
                alignItems="flex-start"
                item
                xs={12}
                lg={8}
                xl={8}
              >
                <CheckBoxSection
                  sectionHeader={"Legal advisors"}
                  checkboxes={this.checkboxesLegal}
                  cb={this.handleCheckBoxChange}
                ></CheckBoxSection>
              </Grid>
              <Box m={2} />
              <Grid
                container
                alignItems="flex-start"
                item
                xs={12}
                lg={8}
                xl={8}
              >
                <CheckBoxSection
                  sectionHeader={"Manufactures"}
                  checkboxes={this.checkboxesManu}
                  cb={this.handleCheckBoxChange}
                ></CheckBoxSection>
              </Grid>
              <Box m={3} />
              <Grid
                container
                alignItems="flex-start"
                item
                xs={12}
                lg={8}
                xl={8}
              >
                <Button
                  onClick={this.handleSubmit}
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
}

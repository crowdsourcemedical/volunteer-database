import React, { Component } from "react";
import { MapPin } from "react-feather";
import {
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  TextField,
  Grid,
  Container,
  FormControlLabel,
  makeStyles,
  Typography,
  InputAdornment,
  Button
} from "@material-ui/core";
import { ComputerScienceTypes, MedicalTypes } from "../types/SignupTypes";

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password1: "",
      password2: "",
      skill: "",
      loc: "",
      selectedField: "medical",
      selectedSpecialty: "",
      aboutText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleSumbit = this.handleSubmit.bind(this);
    this.renderSkillset = this.renderSkillset.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // Seperate click handler needed for material UI button due to currentTarget object
  handleButtonClick(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }
  handleSubmit(e) {
    /*Send a api call to the backend. Redirect to different page */
  }

  validate() {
    /* Should check if everything is filled out and passwords match */
    return "true";
  }

  renderSpecialties(text) {
    return (
      <FormControlLabel
        key={text}
        control={
          <Checkbox
            checked={this.state.selectedSpecialty === text}
            onChange={() => this.setState({ selectedSpecialty: text })}
            color="primary"
            name={text}
          />
        }
        label={text}
      />
    );
  }

  renderSkillset(rows) {
    let gridCheckbox = (
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item xs>
          <FormControlLabel
            control={<Checkbox name="checkedA" color="primary" />}
            label="Frontend Developer"
          />
        </Grid>
        <Grid item xs>
          <FormControlLabel
            control={<Checkbox name="checkedA" color="primary" />}
            label="Frontend Developer"
          />
        </Grid>
      </Grid>
    );

    return new Array(rows).fill(gridCheckbox);
  }

  render() {
    return (
      <div className="signup__container">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="stretch"
          className="signup__gridWrap"
        >
          <Grid item>
            <Typography variant="h1" fontWeight="fontWeightBold">
              Register to Volunteer
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
            >
              <Grid item xs>
                <Typography variant="h2">What's your specialty?</Typography>
                <Typography variant="h6">
                  Let us know where you’re best able to help.
                </Typography>
              </Grid>
              <Grid item xs>
                <Select
                  className="field-select"
                  name="selectedField"
                  value={this.state.selectedField}
                  onChange={this.handleChange}
                >
                  <MenuItem value={"medical"}>Medical</MenuItem>
                  <MenuItem value={"computerScience"}>
                    Computer Science
                  </MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
            >
              <Grid item xs>
                <Typography variant="h2">
                  Tell us a little about yourself
                </Typography>
                <Typography variant="h6">
                  What is your experience and how much time do you have to
                  contribute?
                </Typography>
              </Grid>
              <Grid item xs>
                <TextField
                  className="about-text"
                  placeholder="I’m an ER doctor in Western Massachussetts. We need 20 prints of the Prusa Protective Face Shield - RC2 asap. Print material needs to be sturdy enough to be decontaminated regularly. I’m thinking ABS, PETG, or nylon? Bonus karma if you can also provide the laser cut clear portion - they used 0.5mm thick petg sheet (Covestro VIVAK)."
                  name="aboutText"
                  multiline
                  variant="filled"
                  rows="8"
                  value={this.state.aboutText}
                  onChange={this.handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
            >
              <Grid item xs>
                <Typography variant="h2">Where are you located?</Typography>
                <Typography variant="h6">
                  We’re able to send supplies and help within these regions.
                </Typography>
              </Grid>
              <Grid item xs>
                <TextField
                  className="about-text"
                  placeholder="New York City, NY USA"
                  name="aboutText"
                  variant="filled"
                  rows="1"
                  value={this.state.loc}
                  onChange={this.handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                          fill="green"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" fill="white" />
                        </svg>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
            >
              <Grid item xs>
                <Typography variant="h2">Skillset</Typography>
                <Typography variant="h6">
                  We’ll try to connect you with the kind of talent you need and
                  are looking for.
                </Typography>
              </Grid>
              <Grid item xs>
                <Container>
                  <Typography variant="h4">Medical Staff Advisors</Typography>
                  {this.renderSkillset(3)}
                  <br />
                  <Typography variant="h4">Engineering</Typography>
                  {this.renderSkillset(3)}
                  <br />
                  <Typography variant="h4">Manufacturing</Typography>
                  {this.renderSkillset(3)}
                </Container>
              </Grid>
            </Grid>
            <Grid className="submit__wrapper">
              <Button
                variant="contained"
                color="primary"
                className="submit__button"
              >
                Submit Application
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

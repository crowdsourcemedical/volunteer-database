import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, FieldArray } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  Button,
  TextField,
  Select,
  MenuItem,
} from '@material-ui/core';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';

import api from '../helpers/api';
import { checkboxSections, disabledStaff } from '../data/signup';

const useStyles = makeStyles((theme) => ({
  heading: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  formSection: {
    marginBottom: theme.spacing(8),
  },
  checkboxSection: {
    marginBottom: theme.spacing(4),
  },
  form: {
    marginBottom: theme.spacing(10),
  },
  error: {
    marginBottom: theme.spacing(2),
    color: '#F44336',
  },
}));

async function handleFormSubmit(fields, form, history, setSignupError) {
  console.log('fields', fields);
  form.setSubmitting(false);

  // TODO - check for errors

  setSignupError('Signup failed');

  const payload = {
    user_email: fields.email,
    user_first: fields.userFirst,
    user_last: fields.userLast,
    user_password: fields.password,
    user_is_active: true,
    user_is_admin: false,
    user_is_medical_professional: false,
    user_is_verified: false,
    user_is_volunteer: true,
  };

  // TODO - handle error response; handle success response

  const response = await api.createUser(payload);
  console.log('signup response', response);

  if (response.user_id) {
    history.push('profile');
  }
}

function StaffCheckbox({ staff, arrayHelpers, disabled }) {
  return (
    <FormControlLabel
      key={staff.id}
      label={staff.label}
      control={
        <Checkbox
          color="primary"
          value={staff.id}
          disabled={disabled}
          onChange={(e) => (e.target.checked ? arrayHelpers.push(staff.id) : arrayHelpers.remove(staff.id))}
        />
      }
    />
  );
}

StaffCheckbox.propTypes = {
  staff: PropTypes.object.isRequired,
  arrayHelpers: PropTypes.array.isRequired,
  disabled: PropTypes.bool.isRequired,
};

function SignUpPage(props) {
  const { history } = props;
  const classes = useStyles();

  const [signupError, setSignupError] = React.useState('');

  return (
    <Formik
      initialValues={{
        userDescription: '',
        location: '',
        selectedField: 'medical',
        soughtStaff: [],
      }}
      onSubmit={(fields, form) => handleFormSubmit(fields, form, history, setSignupError)}
    >
      <Form className={classes.form} noValidate autoComplete="off">
        <Grid justify="center" container>
          <Grid item xs={11} sm={11} md={11} lg={9}>
            <Grid container>
              <Grid item>
                <Typography className={classes.heading} variant="h2">
                  Register to Volunteer
                </Typography>
              </Grid>
            </Grid>

            <Grid className={classes.formSection} container spacing={3}>
              <Grid xs={12} sm={12} lg={5} item>
                <Typography gutterBottom variant="h3">
                  First Name
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} lg={7} item>
                <Field name="userFirst">
                  {({ field, form }) => (
                    <TextField
                      name="userFirst"
                      disabled={!form.isValidating && form.isSubmitting}
                      fullWidth
                      size="medium"
                      hiddenLabel
                      placeholder=""
                      variant="filled"
                      value={field.value}
                      onChange={field.onChange}
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  )}
                </Field>
              </Grid>

              <Grid xs={12} sm={12} lg={5} item>
                <Typography gutterBottom variant="h3">
                  Last Name
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} lg={7} item>
                <Field name="userLast">
                  {({ field, form }) => (
                    <TextField
                      name="userLast"
                      disabled={!form.isValidating && form.isSubmitting}
                      fullWidth
                      size="medium"
                      hiddenLabel
                      placeholder=""
                      variant="filled"
                      value={field.value}
                      onChange={field.onChange}
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  )}
                </Field>
              </Grid>

              <Grid xs={12} sm={12} lg={5} item>
                <Typography gutterBottom variant="h3">
                  Email
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} lg={7} item>
                <Field name="email">
                  {({ field, form }) => (
                    <TextField
                      name="email"
                      disabled={!form.isValidating && form.isSubmitting}
                      fullWidth
                      size="medium"
                      hiddenLabel
                      placeholder=""
                      variant="filled"
                      value={field.value}
                      onChange={field.onChange}
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  )}
                </Field>
              </Grid>

              <Grid xs={12} sm={12} lg={5} item>
                <Typography gutterBottom variant="h3">
                  Password
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} lg={7} item>
                <Field name="password">
                  {({ field, form }) => (
                    <TextField
                      name="password"
                      disabled={!form.isValidating && form.isSubmitting}
                      fullWidth
                      size="medium"
                      hiddenLabel
                      placeholder=""
                      variant="filled"
                      value={field.value}
                      onChange={field.onChange}
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  )}
                </Field>
              </Grid>
            </Grid>

            <Grid className={classes.formSection} container spacing={3}>
              <Grid xs={12} sm={12} lg={5} item>
                <Typography gutterBottom variant="h3">
                  What's your specialty?
                </Typography>
                <Typography gutterBottom variant="body1">
                  Let us know where you're best able to help
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} lg={7} item>
                <Field name="selectedField">
                  {({ field, form }) => (
                    <Select
                      fullWidth
                      disabled={!form.isValidating && form.isSubmitting}
                      name="selectedField"
                      value={field.value}
                      onChange={field.onChange}
                    >
                      <MenuItem value="medical">Medical</MenuItem>
                      <MenuItem value="computerScience">Computer Science</MenuItem>
                    </Select>
                  )}
                </Field>
              </Grid>
            </Grid>

            <Grid className={classes.formSection} container spacing={3}>
              <Grid xs={12} sm={12} lg={5} item>
                <Typography gutterBottom variant="h3">
                  Tell us a little about yourself
                </Typography>
                <Typography gutterBottom variant="body1">
                  What is your experience and how much time do you have to contribute?
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} lg={7} item>
                <Field name="userDescription">
                  {({ field, form }) => (
                    <TextField
                      name="userDescription"
                      disabled={!form.isValidating && form.isSubmitting}
                      multiline
                      rows={8}
                      fullWidth
                      size="medium"
                      hiddenLabel
                      placeholder="I’m an ER doctor in Western Massachussetts. We need 20 prints of the Prusa Protective Face Shield - RC2 asap. Print material needs to be sturdy enough to be decontaminated regularly. I’m thinking ABS, PETG, or nylon? Bonus karma if you can also provide the laser cut clear portion - they used 0.5mm thick petg sheet (Covestro VIVAK)."
                      variant="filled"
                      value={field.value}
                      onChange={field.onChange}
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  )}
                </Field>
              </Grid>
            </Grid>

            <Grid className={classes.formSection} container spacing={3}>
              <Grid xs={12} sm={12} lg={5} item>
                <Typography gutterBottom variant="h3">
                  Where are you located?
                </Typography>
                <Typography gutterBottom variant="body1">
                  We're able to send supplies and help within these regions.
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} lg={7} item>
                <Field name="location">
                  {({ field, form }) => (
                    <TextField
                      name="location"
                      disabled={!form.isValidating && form.isSubmitting}
                      fullWidth
                      variant="filled"
                      value={field.value}
                      hiddenLabel
                      placeholder="New York City, NY USA"
                      onChange={field.onChange}
                      InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationOnRoundedIcon color="primary" fontSize="small" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                </Field>
              </Grid>
            </Grid>

            <Grid className={classes.formSection} container spacing={3}>
              <Grid xs={12} sm={12} lg={5} item>
                <Typography gutterBottom variant="h3">
                  Skillset
                </Typography>
                <Typography gutterBottom variant="body1">
                  We'll try to connect you with the kind of talent you need and are looking for.
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} lg={7} item>
                <FieldArray name="soughtStaff">
                  {(arrayHelpers) =>
                    checkboxSections.map((section) => (
                      <section className={classes.checkboxSection} key={section.label}>
                        <Typography gutterBottom variant="h5">
                          {section.label}
                        </Typography>
                        <Grid item container justify="flex-start" xs={12} sm={10} md={8} lg={10}>
                          {section.staff.map((s) => (
                            <Grid item xs={6} key={s.id}>
                              <StaffCheckbox
                                staff={s}
                                arrayHelpers={arrayHelpers}
                                disabled={disabledStaff.includes(s.id)}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </section>
                    ))
                  }
                </FieldArray>
              </Grid>
            </Grid>

            <Grid xs={12} sm={12} lg={12} item>
              <div className={classes.error}>{signupError}</div>
            </Grid>

            <Grid container justify="flex-end">
              <Button type="submit" color="primary" variant="contained" size="medium">
                Submit Application
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}

SignUpPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

SignUpPage.defaultProps = {
  history: {},
};

export default SignUpPage;

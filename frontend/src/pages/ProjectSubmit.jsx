import React from 'react';
import {
  Formik, Form, Field, FieldArray,
} from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Link,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  Button,
  TextField,
} from '@material-ui/core';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';

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
}));

function handleFormSubmit(fields, form) {
  console.log(fields);
  form.setSubmitting(false);
}

function StaffCheckbox({ staff, arrayHelpers, disabled }) {
  return (
    <FormControlLabel
      key={staff.id}
      label={staff.label}
      control={(
        <Checkbox
          color="primary"
          value={staff.id}
          disabled={disabled}
          onChange={(e) => (e.target.checked
            ? arrayHelpers.push(staff.id)
            : arrayHelpers.remove(staff.id))}
        />
      )}
    />
  );
}

function ProjectSubmit() {
  const classes = useStyles();

  const staff = {
    cad: [
      { label: 'Solid Works', id: 'solid-works' },
      { label: 'Inventor', id: 'inventor' },
    ],
    medical: [
      { label: 'Registered Nurse', id: 'registered-nurse' },
      { label: 'Physician Assistant', id: 'physician-assistant' },
      { label: 'Medical Student', id: 'medical-student' },
      { label: 'Intern', id: 'intern' },
      { label: 'Resident', id: 'resident' },
      { label: 'Attending', id: 'attending' },
    ],
    engineering: [
      { label: 'Mechanical Engineer', id: 'mechanical-engineer' },
      {
        label: 'Mechanical Engineer with FEA experience',
        id: 'mechanical-engineer-with-fea-experience',
      },
      { label: 'Electrical Engineer', id: 'electrical-engineer' },
      { label: 'Mechatronics Engineer', id: 'mechatronics-engineer' },
    ],
    legal: [
      { label: 'Lawyer', id: 'lawyer' },
      { label: 'Barrister', id: 'barrister' },
      { label: 'Paralegal', id: 'paralegal' },
    ],
    manufacturing: [
      { label: 'FDM 3D printer', id: 'fdm-3-d-printer' },
      { label: 'SLA 3D printer', id: 'sla-3-d-printer' },
      { label: 'SLS Nylon 3D printer', id: 'sls-nylon-3-d-printer' },
      { label: 'Machinist', id: 'machinist' },
    ],
  };

  const checkboxSections = [
    { staff: staff.medical, label: 'Medical Staff Advisors' },
    { staff: staff.engineering, label: 'Engineering' },
    { staff: staff.manufacturing, label: 'Manufacturing' },
    { staff: staff.legal, label: 'Legal' },
    { staff: staff.cad, label: 'Computer-Aided Design' },
  ];

  const disabledStaff = ['lawyer', 'electrical-engineer', 'intern', 'inventor'];

  return (
    <Formik
      initialValues={{
        projectDescription: '',
        location: '',
        soughtStaff: [],
      }}
      onSubmit={handleFormSubmit}
    >
      <Form className={classes.form} noValidate autoComplete="off">
        <Grid justify="center" container>
          <Grid item xs={11} sm={11} md={11} lg={9}>
            <Grid container>
              <Grid item>
                <Typography className={classes.heading} variant="h2">
                  Submit a New Project
                </Typography>
              </Grid>
            </Grid>
            <Grid className={classes.formSection} container spacing={3}>
              <Grid xs={12} sm={12} lg={5} item>
                <Typography gutterBottom variant="h3">
                  Tell us a little about your project
                </Typography>
                <Typography gutterBottom variant="body1">
                  What's the problem and what are you looking for our volunteers
                  to help you with?
                </Typography>
                <Link href="#">
                  Please read this recommendation from our legal team
                </Link>
              </Grid>
              <Grid xs={12} sm={12} lg={7} item>
                <Field name="projectDescription">
                  {({ field, form }) => (
                    <TextField
                      name="projectDescription"
                      disabled={!form.isValidating && form.isSubmitting}
                      multiline
                      rows={8}
                      fullWidth
                      size="medium"
                      hiddenLabel
                      placeholder="Description"
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
                      placeholder="Location"
                      onChange={field.onChange}
                      InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationOnRoundedIcon
                              color="primary"
                              fontSize="small"
                            />
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
                  What kind of support staff are you looking for help from?
                </Typography>
                <Typography gutterBottom variant="body1">
                  We'll try to connect you with the kind of talent you need and
                  are looking for.
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} lg={7} item>
                <FieldArray name="soughtStaff">
                  {(arrayHelpers) => checkboxSections.map((section) => (
                    <section
                      className={classes.checkboxSection}
                      key={section.label}
                    >
                      <Typography gutterBottom variant="h5">
                        {section.label}
                      </Typography>
                      <Grid
                        item
                        container
                        justify="flex-start"
                        xs={12}
                        sm={10}
                        md={8}
                        lg={10}
                      >
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
                  ))}
                </FieldArray>
              </Grid>
            </Grid>
            <Grid container justify="flex-end">
              <Button
                type="submit"
                color="primary"
                variant="contained"
                size="medium"
              >
                Submit Project
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}

export default ProjectSubmit;

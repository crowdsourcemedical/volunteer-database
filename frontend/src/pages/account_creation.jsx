import React from 'react';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, FormControlLabel, Checkbox, Button, TextField } from '@material-ui/core';
import 'react-dropzone-uploader/dist/styles.css'; // Might need to edit css to make nicer
import Dropzone from 'react-dropzone-uploader';

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

function AccountCreationPage() {
  const classes = useStyles();

  const getUploadParams = () => {
    return { url: '' }; // URL to upload the photo to
  };

  const handleChangeStatus = ({ remove }, status) => {
    if (status === 'headers_received') {
      // toast(`${meta.name} uploaded!`)
      remove();
    } else if (status === 'aborted') {
      // toast(`${meta.name}, upload failed...`)
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        userName: '',
        password: '',
        profileImage: [],
      }}
      onSubmit={handleFormSubmit}
    >
      <Form class={classes.form} noValidate autoComplete="off">
        <Grid justify="center" container>
          <Grid item xs={11} sm={11} md={11} lg={9}>
            <Grid container>
              <Grid item>
                <Typography className={classes.heading} variant="h2">
                  Account Setup
                </Typography>
              </Grid>
            </Grid>
            <Grid className={classes.formSection} container spacing={3}>
              <Grid xs={12} sm={12} lg={5} item>
                <Typography gutterBottom variant="h3">
                  Profile Picture
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} lg={7} item>
                <Dropzone
                  getUploadParams={getUploadParams}
                  onChangeStatus={handleChangeStatus}
                  accept="image/*"
                  maxSize={1000}
                  maxFiles={1}
                  multiple={false}
                  canCancel={false}
                  inputContent="Upload Profile Pic"
                  styles={{
                    dropzone: { width: 400, height: 100 },
                    dropzoneActive: { borderColor: 'green' },
                  }}
                />
              </Grid>
              <Grid xs={12} sm={12} lg={5} item>
                <Typography gutterBottom variant="h3">
                  Username
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} lg={7} item>
                <Field name="userName">
                  {({ field }) => (
                    <TextField
                      // disabled={!form.isValidating && form.isSubmitting}
                      // disabled={false}
                      // id="username"
                      label="Username"
                      // value={field.value}
                      onChange={field.onChange}
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
                  {({ field }) => <TextField id="password" label="Password" value={field.value} />}
                </Field>
              </Grid>
              <Grid xs={12} sm={12} lg={5} item>
                <Typography gutterBottom variant="h3">
                  I am here to
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} lg={7} item>
                <Field name="userPurpose">
                  <React.Fragment>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          value="todo"
                          // onChange={}
                        />
                      }
                      label="Create a Project"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          value="todo"
                          // onChange={}
                        />
                      }
                      label="Volunteer"
                    />
                  </React.Fragment>
                </Field>
              </Grid>
            </Grid>
            <Grid container justify="flex-end">
              <Button type="submit" color="primary" variant="contained" size="medium">
                Create Account
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}

export default AccountCreationPage;

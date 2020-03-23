import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Divider, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  sectionHeading: {
    textDecoration: 'underline',
  },
  buttonMain: {
    margin: '10px',
  },
  code: {
    // backgroundColor: '#000',
    color: '#888',
  },
}));

function Style() {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid container justify="center">
        <Grid item xs={8} lg={4} xl={4}>
          <Typography variant="h1" noWrap>
            h1 Heading
          </Typography>
          <Typography variant="h2" noWrap>
            h2 Heading
          </Typography>
          <Typography variant="h3" noWrap>
            h3 Heading
          </Typography>
          <Typography variant="h4" noWrap>
            h4 Heading
          </Typography>
          <Typography variant="h5" noWrap>
            h5 Heading
          </Typography>
          <Typography variant="h6" noWrap>
            h6 Heading
          </Typography>
          <pre>
            <code className={classes.code}>
              {'<Typography variant="h2">h2 Title & body1 Variant</Typography>'}
            </code>
          </pre>
          <Divider />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12} lg={8} xl={8}>
          <Box m={2}>
            <Typography variant="h2">h2 Title & body1 Variant</Typography>
            <Typography align="left" variant="body1">
              This is using variant "body1". Muffin jujubes sweet roll. Tiramisu
              oat cake brownie cupcake donut cake marzipan brownie bear claw.
              Gingerbread muffin jujubes cookie candy canes chupa chups
              chocolate bar fruitcake apple pie. Candy canes gingerbread biscuit
              cupcake lollipop chocolate bar toffee chocolate bar.
            </Typography>
          </Box>
          <pre>
            <code className={classes.code}>
              {'<Typography variant="h2">h2 Title & body1 Variant</Typography>'}
              <br />
              {'<Typography align="left" variant="body1">...</Typography>'}
            </code>
          </pre>
          <Divider />
        </Grid>
        <Grid item xs={12} lg={8} xl={8}>
          <Box m={2}>
            <Typography variant="h2">h2 Title & body2 Variant</Typography>
            <Typography align="left" variant="body2">
              This is using variant "body2". Muffin jujubes sweet roll. Tiramisu
              oat cake brownie cupcake donut cake marzipan brownie bear claw.
              Gingerbread muffin jujubes cookie candy canes chupa chups
              chocolate bar fruitcake apple pie. Candy canes gingerbread biscuit
              cupcake lollipop chocolate bar toffee chocolate bar.
            </Typography>
          </Box>
          <pre>
            <code className={classes.code}>
              {'<Typography variant="h2">h2 Title & body2 Variant</Typography>'}
              <br />
              {'<Typography align="left" variant="body2">...</Typography>'}
            </code>
          </pre>
          <Divider />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12} lg={8} xl={8}>
          <Box m={2}>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonMain}
            >
              Primary
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.buttonMain}
            >
              Secondary
            </Button>
          </Box>
          <pre>
            <code className={classes.code}>
              {'<Button variant="contained" color="primary">Primary</Button>'}
              <br />
              {
                '<Button variant="contained" color="secondary">Secondary</Button>'
              }
            </code>
          </pre>
          <Divider />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12} lg={8} xl={8}>
          <Box m={2}>
            <TextField
              id="filled-multiline-static"
              label="Multiline"
              multiline
              rows="4"
              defaultValue="Default Value"
              variant="filled"
            />
          </Box>
          <Box m={2}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Engineering</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="cb1" />}
                  label="Frontend Developer"
                  color="primary"
                />
                <FormControlLabel
                  control={<Checkbox name="cb2" />}
                  label="Frontend Developer"
                />
                <FormControlLabel
                  control={<Checkbox name="cb3" />}
                  label="Frontend Developer"
                />
              </FormGroup>
              <FormHelperText>Form Helper Text</FormHelperText>
            </FormControl>
          </Box>
        </Grid>
        <Divider />
      </Grid>
    </Grid>
  );
}

export default Style;

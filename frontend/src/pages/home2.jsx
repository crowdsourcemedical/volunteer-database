import React from 'react';
import {
  Typography,
    Grid,
    Link,
    Button,
    Box,
    Hidden,
} from '@material-ui/core';

import AboutImg from '../images/about.png';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    margin: '100px auto',
    '& > *': {
      margin: theme.spacing(2, 0),
    },
  },
  
  container: {
    '& > *': {
      marginRight: theme.spacing(3),
    },
  },
  backgroundImg : {
    backgroundImage: 'url("../images/hero-edit.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%'
  },
  secondary: {
    backgroundColor: theme.colors.secondaryLight,
  },

}));


const HomePage2 = () => {
    const classes = useStyles();


  return (
      <React.Fragment>
        <div className={classes.backgroundImg}>
            <Box m={6}/>
            <Grid container justify="center">
                <Grid item xs={11} s={9} m={7} lg={6} >
                    <Typography variant="h2" noWrap align="center" color="textPrimary">
                        Do Something Great
                    </Typography>
                    <Box m={2} />
                    <Grid container>
                        <Grid item >
                        <Typography variant="body1" align="left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        <Box m={2} />
                        <Typography variant="body1" align="left">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur.
                        </Typography>
                        </Grid>
                    </Grid>
                    <Box m={6} />
                    <Grid container direction="row" justify="space-between" spacing={2}>
                        <Grid item>
                            <Button variant="contained" color="primary">Submit a Project</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary">Become a Volunteer</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Box m={10} />
        </div>
        <Grid container justify="center">
            <Grid item xs={11} s={9} m={7} lg={6} >
                <Typography variant="h2" noWrap align="left" color="textPrimary">
                    Project Information
                </Typography>
                <Box m={2} />
                <Grid container direction="row" justify="space-between" spacing={2}>
                    <Grid item xs={11} s={9} m={7} lg={6}>
                        <Typography variant="body1" align="left">
                            Regulated medical devices are the purview of the Food and Drug
                            Administration. Any designer or manufacturer producing items
                            claiming to prevent, diagnose, treat, or cure a medical
                            condition are under their jurisdiction and subject to premarket
                            approval. Punishments are wide-ranging but our recommendation is
                            to avoid them altogether.
                        </Typography>
                        <Box m={2} />
                        <Typography variant="body1" align="left">
                        Regulated medical devices are the purview of the Food and Drug
                        Administration. Any designer or manufacturer producing items
                        claiming to prevent, diagnose, treat, or cure a medical
                        condition are under their jurisdiction and subject to premarket
                        approval. Punishments are wide-ranging but our recommendation is
                        to avoid them altogether.
                        </Typography>
                    </Grid>
                    <Grid item xs={11} s={10} m={8} lg={6}>
                        <Typography variant="body1" align="left">
                            THERE WILL BE AN IMAGE HERE!
                            Regulated medical devices are the purview of the Food and Drug
                            Administration. Any designer or manufacturer producing items
                            claiming to prevent, diagnose, treat, or cure a medical
                            condition are under their jurisdiction and subject to premarket
                            approval. Punishments are wide-ranging but our recommendation is
                            to avoid them altogether.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>      
        </Grid>
        <Box m={6} />
   </React.Fragment>

  )
};

export default HomePage2;

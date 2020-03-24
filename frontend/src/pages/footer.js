import React from 'react';
import {
    Grid,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#e0e0e0',
    }
  }));

const Footer = props => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={8}>
                    <Grid item key="howItWorks">
                        <Typography variant="h5">How it Works</Typography>
                    </Grid>    
                    <Grid item key="legal">
                        <Typography variant="h5">Legal</Typography>
                    </Grid>    
                    <Grid item key="getInvolved">
                        <Typography variant="h5">Get Involved</Typography>
                    </Grid>
                    
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justify="center">
                    <Typography variant="h6">&copy;2020 Crowd Source Medical</Typography>
                </Grid>
            </Grid>
      </Grid>
    )
}

export default Footer;

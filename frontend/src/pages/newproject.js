import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, Box, Typography, Grid, Paper } from "@material-ui/core";
import { IconButton, Button, Fab, Divider } from "@material-ui/core";

import CheckBoxSection from '../components/Forms/checkboxSection.js'


const useStyles = makeStyles(theme => ({
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

export default class NewProject extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '',profsRequired:[] };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this)

    }
    
    handleCheckBoxChange(event) {

        //TODO: GET CHECKBOX data from child compoenent onChange
      }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    checkboxesList = [{ "label": "hello", "status": false }, { "label": "hello", "status": false }, { "label": "hello", "status": false }] // pass this to a checkboxsection to output all checkbox labels -> status is if its disabled or enabled


    render() {
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

                        <Typography variant="h4">Tell us about your project</Typography>
                        <Typography variant="h6">What's the problem and what are you looking for our volunteers to help with?</Typography>

                        <form className={useStyles.root} noValidate autoComplete="off">

                            <TextField
                                id="outlined-multiline-static"
                                multiline={true}
                                rows={10}
                                fullWidth={true}
                                size="large"
                                label="Problem statement...."
                                variant="outlined" value={this.state.value} onChange={this.handleChange} />
                            <Box m={5} />
                            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
                                <a >Request Team Members and Advisors</a>
                                <Box m={3} />

                            </Grid>
                            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
                                <Typography variant="h6">Request Team Members and Advisors</Typography>
                                <Box m={5} />

                            </Grid>

                            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
                                <CheckBoxSection right sectionHeader={"Medical Staff advisers"} checkboxes={this.checkboxesList} cb ={this.handleCheckBoxChange} ></CheckBoxSection>
                            </Grid>
                            <Box m={5} />
                            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
                                <CheckBoxSection right sectionHeader={"Engineering"} checkboxes={this.checkboxesList} cb ={this.handleCheckBoxChange}></CheckBoxSection>
                            </Grid>
                            <Box m={5} />

                            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
                                <CheckBoxSection right sectionHeader={"CAD professionals"} checkboxes={this.checkboxesList} cb ={this.handleCheckBoxChange} ></CheckBoxSection>
                            </Grid>
                            <Box m={2} />
                            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
                                <CheckBoxSection sectionHeader={"Legal advisors"} checkboxes={this.checkboxesList} cb ={this.handleCheckBoxChange}></CheckBoxSection>
                            </Grid>
                            <Box m={2} />
                            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
                                <CheckBoxSection sectionHeader={"Manufactures"} checkboxes={this.checkboxesList} cb ={this.handleCheckBoxChange}></CheckBoxSection>
                            </Grid>
                            <Button onClick={this.handleSubmit} variant="contained" size="large" color="primary" className={useStyles.margin}>
                                Submit
                             </Button>
                        </form>
                    </Grid>
                </Grid>
                {/* Footer */}
                <Grid item xs={12} />
                {/* End Main Page Content */}
            </Grid>






        )
    }
}

import React, { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
//import API from "../../api";
import {Menu, MenuItem,  Avatar, Typography, Grid, Divider, Chip} from "@material-ui/core";
import {Dialog, DialogActions, DialogTitle} from "@material-ui/core";
import {Card, CardContent, CardHeader} from "@material-ui/core";
import {IconButton, Button} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';


const UserSmallCard = (props) => {
  const [userId, setUser] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null); //Dropdown menu
  const [blockConfirm, setBlockConfirm] = useState(false) //Block User Dialog
  
/*   async function getUser() {
    try {
      const response = await API.get(`users/1`);
      console.log(response);
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []); */


  const openDropdown = useCallback((event) => setAnchorEl(event.currentTarget), []); //Open the dropdown menu
  const closeDropdown = useCallback(() => setAnchorEl(null), []); //Close dropdown menu
  const blockConfirmOpen = useCallback(() => setBlockConfirm(true), []); //open dialog box
  
  const blockConfirmClose = useCallback(() => {
    setBlockConfirm(false)  //Close Dialog
    setAnchorEl(null) //Close Dropdown
    },
    [], 
  ); 

  const blockConfirmSend = useCallback(() => {
    setBlockConfirm(false) //Close Dialog
    setAnchorEl(null) //Close Dropdown
    //TODO: Send BLOCK data to API
    },
    [],
  );
  
  return (
    <Grid item style={{ maxWidth: "400px"}}>
      <Card style={{ height: "280px"}}>
        <CardHeader
          title="deranjer"
          subheader="Looking to Collaborate"
          avatar={<Avatar aria-label="Recipe">D</Avatar>}
          action={
            <React.Fragment>
              <IconButton onClick={openDropdown}>
                <MoreVertIcon />                    
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeDropdown}
              >
                <MenuItem onClick={closeDropdown}>Follow</MenuItem>
                <MenuItem onClick={closeDropdown}>Message</MenuItem>
                <MenuItem onClick={blockConfirmOpen}>Block</MenuItem>
              </Menu>
              <Dialog
                //fullScreen={fullScreen}
                open={blockConfirm}
                onClose={blockConfirmClose}
                aria-labelledby="blockConfirm"
              >
                <DialogTitle id="blockConfirm">{"Are you sure you want to block this user?"}</DialogTitle>
                <DialogActions>
                  <Button onClick={blockConfirmSend} color="secondary">
                    Agree
                  </Button>
                  <Button onClick={blockConfirmClose} color="primary">
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>
          }             
        />
        <CardContent>
          <Typography>
            Experienced 3D Modeler in CAD. 
            Experienced with Medical Supplies/facemask. 
            Ready to help.
            </Typography>
          <Typography align="center" variant="h6">Skills</Typography>
          <Divider variant="fullWidth" style={{ margin: "5px"}}/>
          <Grid container justify="center">
            <Chip label="3d Modeling" style={{ margin: "5px"}}/>
            <Chip label="Medical Supplies" style={{ margin: "5px"}}/>
            <Chip label="facemask" style={{ margin: "5px"}}/>
          </Grid>
          <Grid container justify="center">
            <Chip label="more" style={{ margin: "5px"}}/>
            <Chip label="more2" style={{ margin: "5px"}}/>
            <Chip label="more3" style={{ margin: "5px"}}/>
          </Grid>
        </CardContent> 
      </Card>
    </Grid>   
  );
}

UserSmallCard.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
}


export default UserSmallCard;
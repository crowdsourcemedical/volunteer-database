import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  Menu,
  MenuItem,
  Avatar,
  Typography,
  Grid,
  Divider,
  Chip,
  Dialog,
  DialogActions,
  DialogTitle,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Button,
} from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';

const UserSmallCard = ({ name, status, skills, description }) => {
  const [anchorEl, setAnchorEl] = useState(null); // Dropdown menu
  const [blockConfirm, setBlockConfirm] = useState(false); // Block User Dialog

  const userSkills = skills.map((skill) => <Chip label={skill} style={{ margin: '5px' }} />);
  const openDropdown = useCallback((event) => setAnchorEl(event.currentTarget), []); // Open the dropdown menu
  const closeDropdown = useCallback(() => setAnchorEl(null), []); // Close dropdown menu
  const blockConfirmOpen = useCallback(() => setBlockConfirm(true), []); // open dialog box

  const blockConfirmClose = useCallback(() => {
    setBlockConfirm(false); // Close Dialog
    setAnchorEl(null); // Close Dropdown
  }, []);

  const blockConfirmSend = useCallback(() => {
    setBlockConfirm(false); // Close Dialog
    setAnchorEl(null); // Close Dropdown
    // TODO: Send BLOCK data to API
  }, []);

  return (
    <Grid item style={{ maxWidth: '400px' }}>
      <Card style={{ height: '280px' }}>
        <CardHeader
          title={name}
          subheader={status}
          avatar={<Avatar aria-label="Recipe">D</Avatar>}
          action={
            <>
              <IconButton onClick={openDropdown}>
                <MoreVertIcon />
              </IconButton>
              <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeDropdown}>
                <MenuItem onClick={closeDropdown}>Follow</MenuItem>
                <MenuItem onClick={closeDropdown}>Message</MenuItem>
                <MenuItem onClick={blockConfirmOpen}>Block</MenuItem>
              </Menu>
              <Dialog
                // fullScreen={fullScreen}
                open={blockConfirm}
                onClose={blockConfirmClose}
                aria-labelledby="blockConfirm"
              >
                <DialogTitle id="blockConfirm">Are you sure you want to block this user?</DialogTitle>
                <DialogActions>
                  <Button onClick={blockConfirmSend} color="secondary">
                    Agree
                  </Button>
                  <Button onClick={blockConfirmClose} color="primary">
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          }
        />
        <CardContent>
          <Typography>{description}</Typography>
          <Typography align="center" variant="h6">
            Skills
          </Typography>
          <Divider variant="fullWidth" style={{ margin: '5px' }} />
          <Grid container justify="center">
            {userSkills}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

UserSmallCard.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
};

export default UserSmallCard;

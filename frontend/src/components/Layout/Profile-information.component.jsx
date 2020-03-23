import React, { Fragment } from 'react';
import Avatar from './Avatar.component.jsx';
// Material UI
import { InboxIcon, MailIcon } from '@material-ui/icons';

// Material Core
import ListItemIcon from '@material-ui/core/ListItemIcon';

export const drawer = ({ classes }) => (
  <Fragment>
    <div className={classes.toolbar} />
    <Avatar />
    <List>
      {['Username', 'Description'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Fragment>
);

const userName = ({ username }) => {};

const description = () => {};

export { userName, description };

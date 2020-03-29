import React from 'react';
import { Grid, Typography } from '@material-ui/core';

function NoChatView() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Typography variant="h2">No chats!</Typography>
      </Grid>
    </Grid>
  );
}

export default NoChatView;

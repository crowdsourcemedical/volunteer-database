import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';
import ChatView from './ChatView';
import ChatList from './ChatList';
import NoChatView from './NoChatView';
import ChatStore from '../../stores/ChatStore';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: 'white',
    paddingBottom: theme.spacing(4),
  },
  chatViewWrapper: {
    padding: '0 48px',
  },
}));

function ChatViewSwitch({ routeProps }) {
  return (
    <Switch>
      <Route path={`${routeProps.match.path}/:id`} exact component={ChatView} />
    </Switch>
  );
}

ChatViewSwitch.defaultProps = {
  routeProps: {},
};

ChatViewSwitch.propTypes = {
  routeProps: PropTypes.object,
};

function ChatRoute(routeProps) {
  const chats = ChatStore.useState((s) => s.chats);
  const classes = useStyles();

  if (chats.length === 0) {
    return <NoChatView />;
  }

  return (
    <Grid className={classes.wrapper} container>
      <Grid item lg={2}>
        <ChatList routeProps={routeProps} />
      </Grid>
      <Grid className={classes.chatViewWrapper} item lg={10}>
        <ChatViewSwitch routeProps={routeProps} />
      </Grid>
    </Grid>
  );
}

export default ChatRoute;

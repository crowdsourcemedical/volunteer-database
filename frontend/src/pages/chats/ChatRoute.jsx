import React from "react";
import { Switch, Route } from "react-router-dom";
import ChatView from "./ChatView";
import ChatList from "./ChatList";
import NoChatView from "./NoChatView";
import { ChatStore } from "../../stores/ChatStore";
import { Grid, makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginBottom: theme.spacing(4)
  }
}));

function ChatViewSwitch({ routeProps }) {
  return (
    <Switch>
      <Route path={`${routeProps.match.path}/:id`} exact component={ChatView} />
    </Switch>
  );
}

function ChatRoute(routeProps) {
  const chats = ChatStore.useState(s => s.chats);
  const classes = useStyles();

  if (chats.length === 0) {
    return <NoChatView />;
  }

  return (
    <Grid className={classes.wrapper} container>
      <Grid item lg={2}>
        <ChatList routeProps={routeProps} />
      </Grid>
      <Grid item lg={10}>
        <Container>
          <ChatViewSwitch routeProps={routeProps} />
        </Container>
      </Grid>
    </Grid>
  );
}

export default ChatRoute;

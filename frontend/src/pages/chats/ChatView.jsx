import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { ChatStore } from "../../stores/ChatStore";

function ChatMessage({ message }) {
  return message.text;
}

function ChatView() {
  // TODO: Get chat data passed in as prop
  const chats = ChatStore.useState(s => s.chats);
  const chat = chats[0];

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography gutterBottom variant="h2">
          Message list
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction="column-reverse">
          {chat.messages.map(message => (
            <Grid key={message.id}>
              <ChatMessage message={message} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ChatView;

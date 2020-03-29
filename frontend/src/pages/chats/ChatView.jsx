import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { format } from 'date-fns';
import ChatStore from '../../stores/ChatStore';

const useStyles = makeStyles((theme) => ({
  message: {
    backgroundColor: (props) => (props.isSelf ? grey[100] : theme.palette.primary.main),
    color: (props) => (props.isSelf ? theme.palette.text.primary : theme.palette.primary.contrastText),
    padding: '10px',
    borderRadius: '4px',
    maxWidth: '480px',
    width: '100%',
    alignSelf: (props) => (props.isSelf ? 'flex-end' : 'flex-start'),
  },
}));

function ChatMessage(props) {
  const { message, isSelf } = props;
  const classes = useStyles(props);
  return (
    <Grid container item direction="column" justify={isSelf ? 'flex-end' : 'flex-start'}>
      <Grid item className={classes.message}>
        {message.text}
      </Grid>
      <Grid container item justify={isSelf ? 'flex-end' : 'flex-start'}>
        <time>
          <Typography variant="caption">{format(message.createdAt, 'h:mmb')}</Typography>
        </time>
      </Grid>
    </Grid>
  );
}

ChatMessage.defaultProps = {
  message: {},
  isSelf: false,
};

ChatMessage.propTypes = {
  message: PropTypes.object(),
  isSelf: PropTypes.bool(),
};

function ChatView({ match }) {
  const chatId = match.params.id;
  const chats = ChatStore.useState((s) => s.chats);
  const chat = chats.find((chat) => chat.id === chatId);

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography gutterBottom variant="h2">
          Conversation with Jane Doe
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction="column-reverse">
          {chat.messages
            .sort((a, b) => b.createdAt - a.createdAt)
            .map((message) => (
              <Grid item key={message.id}>
                <ChatMessage isSelf={message.userId === '1'} message={message} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

ChatView.defaultProps = {
  match: {},
};

ChatView.propTypes = {
  match: PropTypes.object(),
};

export default ChatView;

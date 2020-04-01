import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListItem, List, makeStyles, Avatar, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { format } from 'date-fns';
import ChatStore from '../../stores/ChatStore';

const useStyles = makeStyles((theme) => ({
  chatList: {
    borderRightWidth: 1,
    borderRightColor: grey[100],
    borderRightStyle: 'solid',
    padding: 0,
  },
  chat: {
    display: 'grid',
    padding: '10px',
    gridColumnGap: '10px',
    gridTemplateAreas: `
      "avatar name time"
      "avatar unread-messages ."
    `,
    gridTemplateColumns: '50px 1fr max-content',
    gridTemplateRows: '25px 25px',
    color: theme.palette.text.primary,
  },
  activeChat: {
    backgroundColor: grey[100],
  },
  avatar: {
    gridArea: 'avatar',
    height: '50px',
    width: '50px',
  },
  name: {
    gridArea: 'name',
    alignSelf: 'end',
  },
  unreadMessages: {
    gridArea: 'unread-messages',
    alignSelf: 'start',
    fontSize: '12px',
  },
  time: {
    gridArea: 'time',
    alignSelf: 'end',
    fontSize: '12px',
  },
}));

function ChatList() {
  const chats = ChatStore.useState((s) => s.chats);
  const classes = useStyles();
  return (
    <List className={classes.chatList}>
      {chats.map((chat) => (
        <ListItem
          className={classes.chat}
          component={NavLink}
          key={chat.id}
          to={`/chats/${chat.id}`}
          activeClassName={classes.activeChat}
        >
          <Avatar className={classes.avatar} src={`https://i.pravatar.cc/150?u=${chat.id}`} />
          <Typography className={classes.name} variant="h5">
            Jane Doe
          </Typography>
          <Typography className={classes.unreadMessages} variant="body2">
            2 messages
          </Typography>
          <Typography className={classes.time} variant="body2">
            {format(chat.messages[chat.messages.length - 1].createdAt, 'h:mmb')}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}

export default ChatList;

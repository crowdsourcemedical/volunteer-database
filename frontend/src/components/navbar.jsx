import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import InboxIcon from '@material-ui/icons/Inbox';
import Avatar from '@material-ui/core/Avatar';

import { PAGE_LINKS_LIST, LOGIN_PAGE_LINK } from '../constants/navigation';
import LoginForm from './Forms/LoginForm';
import MobileSearch from './Search/MobileSearch.jsx'

const navbarHeight = 64;
const drawerWidth = 240;

const ListItemLink = (props) => <ListItem button component="a" {...props} />;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  navBar: {
    height: navbarHeight,
    background: '#2196F3',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  navBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    height: '100%',
    '& *:last-child': {
      marginLeft: 'auto',
    },
  },
  appTitle: {
    color: '#fafafa',
  },
  authLink: {
    '& *': {
      color: '#fafafa',
    },
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  listSpacer: {
    height: navbarHeight,
  },
  list: {
    width: drawerWidth,
  },
  subcontainer: {
    marginLeft: 'auto',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },
  backdrop: {
    background: theme.palette.primary.main,
    opacity: '0.5 !important',
  },
  offset: theme.mixins.toolbar,
}));

const NavBar = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const avatarURL = 'https://material-ui.com/static/images/avatar/1.jpg';

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(!isOpen);
  };

  const toggleLoginDialog = () => {
    setLoginIsOpen(!loginIsOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.navBar, {
          [classes.navBarShift]: isOpen,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            className={clsx(classes.menuButton, isOpen && classes.hide)}
            id="drawerButton"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.appTitle}>
            App Title
          </Typography>
          <Grid
            direction="row"
            alignItems="center"
            justify="flex-end"
            container
          >
            <Grid item>
              <Link>
                <Avatar alt='Remy Sharp' src={avatarURL} />
              </Link>
            </Grid>
            <Grid item>
              <Link>
                <Button
                  variant='contained'
                  color='primary'
                  size='large'
                  className={classes.button}
                  startIcon={<InboxIcon />}
                >
                  INBOX
                </Button>
              </Link>
            </Grid>

          </Grid>

          <div className={classes.subcontainer}>
            <MobileSearch />
            <Link
              className={classes.authLink}
              onClick={(e) => {
                e.preventDefault();
                toggleLoginDialog();
              }}
            >
              <Typography variant="h6" noWrap>
                {LOGIN_PAGE_LINK.name}
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <Drawer className={classes.drawer} anchor="left" open={isOpen} onClose={toggleDrawer}>
        <div className={classes.listSpacer} />
        <Divider />
        <List className={classes.list}>
          {PAGE_LINKS_LIST && PAGE_LINKS_LIST.map((link) => (
            <ListItemLink key={link.path} href={link.path}>
              <ListItemText primary={link.name} />
            </ListItemLink>
          ))}
        </List>
      </Drawer>
      <Dialog
        open={loginIsOpen}
        onClose={toggleLoginDialog}
        BackdropProps={{
          className: classes.backdrop,
        }}
      >
        <LoginForm />
      </Dialog>
    </div>
  );
};

export default NavBar;

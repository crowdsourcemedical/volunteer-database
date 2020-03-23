import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";

import { PAGE_LINKS_LIST, LOGIN_PAGE_LINK } from "../constants/navigation";

const navbarHeight = 64;
const drawerWidth = 240;

const ListItemLink = props => <ListItem button component="a" {...props} />;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  navBar: {
    height: navbarHeight,
    color: "#010913",
    background: "#FFF",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  navBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  authLink: {
    marginLeft: "auto"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  listSpacer: {
    height: navbarHeight
  },
  list: {
    width: drawerWidth
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = event => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="sticky"
        elevation={0}
        className={clsx(classes.navBar, {
          [classes.navBarShift]: isOpen
        })}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={toggleDrawer} edge="start" className={clsx(classes.menuButton, isOpen && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Crowd Source Solutions
          </Typography>
          <Button href={LOGIN_PAGE_LINK.path} variant="contained" color="primary" className={classes.authLink}>
            {LOGIN_PAGE_LINK.name}
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} anchor="left" open={isOpen} onClose={toggleDrawer}>
        <div className={classes.listSpacer} />
        <Divider />
        <List className={classes.list}>
          {PAGE_LINKS_LIST &&
            PAGE_LINKS_LIST.map(link => (
              <ListItemLink href={link.path}>
                <ListItemText primary={link.name} />
              </ListItemLink>
            ))}
        </List>
      </Drawer>
    </div>
  );
};

export default NavBar;

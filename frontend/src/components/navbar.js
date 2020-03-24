import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';

import { PAGE_LINKS_LIST, LOGIN_PAGE_LINK } from '../constants/navigation';
import LoginForm from './Forms/LoginForm'

const navbarHeight = 64;
const drawerWidth = 240;

const ListItemLink = props => <ListItem button component="a" {...props} />;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
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
			marginLeft: 'auto'
		}
	},
	appTitle: {
		color: '#fafafa'
	},
	authLink: {
		'& *': {
			color: '#fafafa'
		},
		'&:hover': {
			cursor: 'pointer',
			textDecoration: 'none'
		}
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
	backdrop: {
		background: theme.palette.primary.main,
		opacity: '0.5 !important',
	}
}));

const NavBar = () => {
	const classes = useStyles();
	const [isOpen, setIsOpen] = useState(false);
	const [loginIsOpen, setLoginIsOpen] = useState(false);

  const toggleDrawer = event => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setIsOpen(!isOpen);
  };

	const toggleLoginDialog = () => {
		setLoginIsOpen(!loginIsOpen);
	}

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
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap className={classes.appTitle}>
						App Title
					</Typography>
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
			<Dialog
				open={loginIsOpen}
				onClose={toggleLoginDialog}
				BackdropProps={{
					className: classes.backdrop
				}}>
				<LoginForm />
			</Dialog>
		</div>
	);
};

export default NavBar;

import React from 'react';
import {
  Card,
	Divider,
	Grid,
	Typography,
	CardContent,
	Button,
	TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 500,
		margin: '0 auto',
	},
	header: {
		padding: theme.spacing(3),
	},
	signUpLink: {
		color: theme.palette.primary.main,
	},
	content: {
		padding: theme.spacing(4),
	},
	or: {
		backgroundColor: theme.palette.common.white,
		margin: '-42px auto 42px',
		width: '100px',
		fontSize: '16px',
		color: theme.palette.grey['700'],
	},
	divider: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4),
	},
	email: {
		marginBottom: theme.spacing(4),
	},
	loginFacebook: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(2),
	},
	forgotPassword: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	}
}));

const LoginPage = () => {
	const classes = useStyles();
	// const [email, setEmail] = React.useState("");
	// const [password, setPassword] = React.useState("");
	//
	// const handleSubmit = (e) => {
	// /* Send a api call in order to recieve a token. Store this token */
	//
	// }

	return (
		<Card className={classes.root} elevation={4}>
			<Grid
				container
				direction="row"
				justify="space-between"
				alignItems="center"
				className={classes.header}
			>
				<Typography variant="h5" component="h2">
					Login
				</Typography>

				<a href="#" className={classes.signUpLink}>
					Don't have an account? Sign up here
				</a>
			</Grid>

			<CardContent className={classes.content}>
				<Grid
					container
					direction="column"
				>
					<Button variant="outlined" color="primary" size="large">
						Continue with Google
					</Button>

					<Button variant="outlined" color="primary" size="large" className={classes.loginFacebook}>
						Continue with Facebook
					</Button>

					<Divider className={classes.divider} />

					<div className={classes.or}>
						OR
					</div>

					<TextField label="Email" type="email" variant="filled" className={classes.email} />
					<TextField label="Password" type="password" variant="filled" />

					<Grid
						container
						justify="flex-end"
					>
						<Button variant="text" className={classes.forgotPassword}>
							Forgot password?
						</Button>
					</Grid>

					<Button color="primary" size="large" variant="contained">
						Login
					</Button>
				</Grid>
			</CardContent>
		</Card>
	)
}

export default LoginPage;

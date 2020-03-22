import React from 'react';

const LoginPage = props => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	
	const handleSubmit = (e) => {
	/* Send a api call in order to recieve a token. Store this token */

	}
	return(
		<form onSubmit={handleSubmit}>
			<label>email</label>
			<input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
			<label>password</label>
			<input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
			<input type='submit' value='submit'></input>
		</form>
	)
}

export default LoginPage;

import React, {Component} from 'react';

export default class LoginPage extends Component {
	constructor(props){
		super(props)
		this.state = {
			email: '',
			password: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit= this.handleSubmit.bind(this)

	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}
	handleSubmit(e){
	/* Send a api call in order to recieve a token. Store this token */

	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<label>email</label>
				<input type='email' name='email' value={this.state.email} onChange={this.handleChange}></input>
				<label>password</label>
				<input type='password' name='password' value={this.state.password} onChange={this.handleChange}></input>
				<input type='submit' value='submit'></input>
			</form>
		)
	}
}

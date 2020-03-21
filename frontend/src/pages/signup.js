import React, {Component} from 'react';

export default class SignupPage extends Component {
	constructor(props){
		super(props)
		this.state = {
			email: '',
			password1: '',
			password2: '',
			skill: '',
			loc: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSumbit = this.handleSubmit.bind(this)

	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}
	handleSubmit(e) {
		/*Send a api call to the backend. Redirect to different page */
	}

	validate(){
		/* Should check if everything is filled out and passwords match */
		return 'true' 
	}


	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<label>email</label>
				<input type='email' name='email' value={this.state.email} onChange={this.handleChange}></input>

				<label>password</label>
				<input type='password' name='password1' value={this.state.password1} onChange={this.handleChange}></input>

				<label>repeat password</label>
				<input type='password' name='password2' value={this.state.password2} onChange={this.handleChange}></input>

				<label>Skill</label>
				<select name='skill'>
					<option value="a">A</option>
					<option value="b">B</option>
				</select>

				<label>Locaction</label>
				<input type='text' name='loc' value={this.state.loc} onChange={this.handleChange}></input>

				<input type='submit' disabled={this.validate()} value='submit'></input>
			</form>
		)
	}
}

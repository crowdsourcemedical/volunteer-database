import React, {Component} from 'react';
import {
	InputLabel,
	Select,
	MenuItem,
	Checkbox,
	FormGroup,
	TextField,
	FormControlLabel
} from '@material-ui/core'
import { ComputerScienceTypes, MedicalTypes } from '../types/SignupTypes';

export default class SignupPage extends Component {
	constructor(props){
		super(props)
		this.state = {
			email: '',
			password1: '',
			password2: '',
			skill: '',
			loc: '',
			selectedField: 'medical',
			selectedSpecialty: '',
			aboutText: '',
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleButtonClick = this.handleButtonClick.bind(this)
		this.handleSumbit = this.handleSubmit.bind(this)

	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	// Seperate click handler needed for material UI button due to currentTarget object
	handleButtonClick(e) {
		this.setState({[e.currentTarget.name]: e.currentTarget.value})
	}
	handleSubmit(e) {
		/*Send a api call to the backend. Redirect to different page */
	}

	validate(){
		/* Should check if everything is filled out and passwords match */
		return 'true'
	}

	renderSpecialties(text) {
		return (
		<FormControlLabel
			key={text}
			control={
				<Checkbox
					checked={this.state.selectedSpecialty === text}
					onChange={() => this.setState({ selectedSpecialty: text })}
					color="primary"
					name={text} />
				}
			label={text}
		/>
	)}


	render() {
		return(
			<div className="signup__container">
					<InputLabel id="field">I work in the field of...</InputLabel>
					<Select
						className="field-select"
						name="selectedField"
						value={this.state.selectedField}
						onChange={this.handleChange}
					>
						<MenuItem value={'medical'}>Medical</MenuItem>
						<MenuItem value={'computerScience'}>Computer Science</MenuItem>
					</Select>
	        <FormGroup>
						{this.state.selectedField === 'computerScience' && ComputerScienceTypes.map((text) => (this.renderSpecialties(text)))}
	          {this.state.selectedField === 'medical' && MedicalTypes.map((text) => (this.renderSpecialties(text)))}
					</FormGroup>
					<TextField
						className="about-text"
						label="Tell us about yourself. What is your experience and how much time do you have to contribute?"
						name="aboutText"
						multiline
						variant="filled"
						rows="8"
						value={this.state.aboutText}
						onChange={this.handleChange}
					/>
			</div>
		)
	}
}

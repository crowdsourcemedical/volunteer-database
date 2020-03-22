import React, { useState } from 'react'
import {
	Button,
	CircularProgress,
	FormControl,
	FormHelperText,
	Grid,
	Icon,
	MenuItem,
	Select,
	TextField
} from '@material-ui/core'

const workInFields = [
	{
		name: 'Medical',
		specifics: [
			'Attending',
			'Resident',
			'Intern',
			'Medical Student',
			'Physician Assistant',
			'Nurse Practitioner',
			'Registered Nurse',
			'Emergency Medical Technician'
		]
	},
	{
		name: 'Computer Science',
		specifics: [
			'Front-end Developer (AKA Client-Side Developer)',
			'Back-end Developer (AKA Service-side Developer)',
			'Full-stack Developer',
			'Middle-Tier Developer',
			'Web Developer',
			'Desktop Developer',
			'Mobile Developer',
			'Graphics Developer'
		]
	}
]

const SignupVolunteerPage = (props) => {
	const [ email, setEmail ] = useState("")
	const [ password1, setPassword1 ] = useState("")
	const [ password2, setPassword2 ] = useState("")
	const [ workFieldGeneral, setWorkFieldGeneral ] = useState(workInFields[0].name)
	const [ workFieldSpecific, setWorkFieldSpecific ] = useState(workInFields[0].specifics[0])
	// TODO attempt to autofill this from the user's browser's location
	const [ location, setLocation ] = useState("")
	const [ moreInformation, setMoreInformation ] = useState("")
	const [ isLoading, setIsLoading ] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		// TODO this is where the HTTP POST should be sent, waited for, and then some sort of navigation should occur
	}

	/*
		In terms of raw validation,
			- The form inputs are marked required, so we don't need to validate that they're not empty.
			- The email input is marked with the email type, so we don't need to validate that it's a valid
				email (and that's next to impossible anyway).
			- We _do_ need to check that the passwords are equal.
		In terms of UX,
			- Everything should be checked so the user knows when they can click the submit button.
	*/
	const isReady = () => {
		return email !== "" &&
			password1 !== "" &&
			password2 !== "" &&
			workFieldGeneral !== "" &&
			workFieldSpecific !== "" &&
			location !== "" &&
			moreInformation !== "" &&
			password1 === password2
	}

	/*
	 * This is a separate method so that behavior can ran that sets the specific work field to the first
	 * option of the newly-selected general work field. This prevents users from seeing a specific field
	 * from one general field when they've selected a different one.
	 */
	const handleChangeWorkGeneral = (e) => {
		const newVal = e.target.value
		setWorkFieldGeneral(newVal)
		setWorkFieldSpecific(workInFields.filter(field => newVal === field.name)[0].specifics[0])
	}

	const getFieldSpecificOptions = workInFields.filter(field => workFieldGeneral === field.name)[0].specifics

	return (
		<div>
			<h2>Register an account</h2>
			<form onSubmit={handleSubmit}>
				<Grid container>
					<Grid item xs={12}>
						<FormControl>
							<TextField id="email"  label="Email" type="email" required={true} onChange={(e) => setEmail(e.target.value)} />
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl>
							<TextField id="password" label="Password" type="password" required={true} onChange={(e) => setPassword1(e.target.value)} />
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl>
							<TextField id="password-confirm" label="Confirm password" type="password" required={true} onChange={(e) => setPassword2(e.target.value)} />
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl>
							<Select id="work-field-general" value={workFieldGeneral} onChange={handleChangeWorkGeneral}>
								{ workInFields.map(field => <MenuItem value={field.name} key={field.name}>{field.name}</MenuItem>) }
							</Select>
							<FormHelperText>I work in the field of ...</FormHelperText>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl>
							<Select id="work-field-specific" value={getFieldSpecificOptions[0]} onChange={(e) => setWorkFieldSpecific(e.target.value)}>
								{ getFieldSpecificOptions.map(spec => <MenuItem value={spec} key={spec}>{spec}</MenuItem>) }
							</Select>
							<FormHelperText>And that is, specifically ...</FormHelperText>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl>
							<TextField id="location" label="I live in ..." required={true} onChange={(e) => setLocation(e.target.value)} />
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<TextField id="more-information" label="Tell us more about yourself" multiline rows="4" required={true} onChange={(e) => setMoreInformation(e.target.value)} />
					</Grid>
					<Grid item xs={12}>
						<Button id="submit" type="submit" variant="contained" color="primary" style={{ marginTop: "1rem" }} endIcon={<Icon>send</Icon>} disabled={!isReady() || isLoading}>
							Submit
						</Button>
					</Grid>
					<Grid item xs={12}>
						{ isLoading && <CircularProgress style={{ marginTop: '2rem' }} /> }
					</Grid>
				</Grid>
			</form>
		</div>
	)
}

export default SignupVolunteerPage

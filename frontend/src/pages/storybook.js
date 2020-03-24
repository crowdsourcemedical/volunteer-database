import React from 'react';
import UserSmallCard from '../components/Cards/userSmallCard.js';
import CheckBoxSection from '../components/Forms/checkboxSection.js';
import { Box } from '@material-ui/core';

const mockUser = {
	id: '1',
	name: 'derjanger',
	description: 'Experienced 3D modeler in CAD. Experience with medical supplise/facemasks. Ready to help.',
	skills: ['3d Modeling', 'Medical Supplies', 'facemasks', 'more', 'more2', 'more3'],
	status: 'Looking to collaborate',
};

const checkboxesListMock = [
	{ label: 'Medical staff', status: false },
	{ label: 'Doctor', status: false },
	{ label: 'Engineer', status: false },
]; // pass this to a checkboxsection to output all checkbox labels -> status is if its disabled or enabled

const handleCheckBoxSelection = () => {
	// handle when the checkbox is clicked
};

const StoryBook = props => {
	return (
		<div>
			<React.Fragment>
				<h1>User Large Card</h1>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<UserSmallCard user={mockUser} />
				</div>
			</React.Fragment>
			<Box m={6} />

			<React.Fragment>
				<h1>CheckBox component</h1>
				<CheckBoxSection
					sectionHeader={'Staff required'}
					checkboxes={checkboxesListMock}
					cb={handleCheckBoxSelection}
				></CheckBoxSection>
			</React.Fragment>
		</div>
	);
};

export default StoryBook;

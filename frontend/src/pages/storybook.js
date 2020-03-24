import React from 'react';
import UserSmallCard from '../components/Cards/userSmallCard.js';
<<<<<<< HEAD
=======
import CheckBoxSection from '../components/Forms/Checkboxes.js';
import { Box } from '@material-ui/core';
>>>>>>> 55d639da589d85a2b1f5705a9775ef8f32c47ff2

const mockUser = {
	id: '1',
	name: 'derjanger',
	description: 'Experienced 3D modeler in CAD. Experience with medical supplise/facemasks. Ready to help.',
	skills: ['3d Modeling', 'Medical Supplies', 'facemasks', 'more', 'more2', 'more3'],
	status: 'Looking to collaborate',
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
		</div>
	);
};

export default StoryBook;

import React from 'react';
import UserSmallCard from '../components/Cards/userSmallCard.js';

const mockUser = {
	id: '1',
	name: 'derjanger',
	description: 'Experienced 3D modeler in CAD. Experience with medical supplise/facemasks. Ready to help.',
	skills: ['3d Modeling', 'Medical Supplies', 'facemasks', 'more', 'more2', 'more3'],
	status: 'Looking to collaborate',
};

const StoryBook = props => {
	return (
		<React.Fragment>
			<h1>User Small Card</h1>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<UserSmallCard user={mockUser} />
			</div>
		</React.Fragment>
	);
};

export default StoryBook;

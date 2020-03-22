import React from 'react';
import UserSmallCard from '../components/Cards/userSmallCard.js';
import Navbar from '../components/navbar';

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
			<Navbar />
			<h1>User Small Card</h1>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<UserSmallCard user={mockUser} />
			</div>
		</React.Fragment>
	);
};

export default StoryBook;

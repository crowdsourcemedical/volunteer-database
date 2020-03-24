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

export { mockUser, checkboxesListMock };

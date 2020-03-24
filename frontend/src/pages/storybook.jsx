import React from 'react';
import { Box } from '@material-ui/core';
import UserSmallCard from '../components/Cards/userSmallCard';
import CheckBoxSection from '../components/Forms/checkboxSection';

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

const StoryBook = () => (
  <div>
    <>
      <h1>User Large Card</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <UserSmallCard user={mockUser} />
      </div>
    </>
    <Box m={6} />

    <>
      <h1>CheckBox component</h1>
      <CheckBoxSection
        sectionHeader="Staff required"
        checkboxes={checkboxesListMock}
        cb={handleCheckBoxSelection}
      />
    </>
  </div>
);

export default StoryBook;

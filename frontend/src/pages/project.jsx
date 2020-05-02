import React from 'react';

import ProjectProfile from '../components/Profile/ProjectProfile.component';

const ProjectPage = () => {
  // TODO :- replace this data with data from backend API
  const projectData = {
    name: 'ER Restock',
    contibutersNeeded: '3',
    location: 'Massachussetts, USA',
    description:
      'I’m an ER doctor in Western Massachussetts. We need 20 prints of the Prusa Protective Face Shield - RC2 asap. Print material needs to be sturdy enough to be decontaminated regularly. I’m thinking ABS, PETG, or nylon? Bonus karma if you can also provide the laser cut clear portion - they used 0.5mm thick petg sheet (Covestro VIVAK).',
    lookingFor: [
      'Registered Nurse',
      'Registered Nurse',
      'Registered Nurse',
      'Other tag',
      'Frontend Engineer',
      'Something Different',
      'Job Title',
      'Another Job Title',
      'Engineer',
    ],
  };

  return <ProjectProfile data={projectData} />;
};

export default ProjectPage;

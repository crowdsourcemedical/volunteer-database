const staff = {
  cad: [
    { label: 'Solid Works', id: 'solid-works' },
    { label: 'Inventor', id: 'inventor' },
  ],
  medical: [
    { label: 'Registered Nurse', id: 'registered-nurse' },
    { label: 'Physician Assistant', id: 'physician-assistant' },
    { label: 'Medical Student', id: 'medical-student' },
    { label: 'Intern', id: 'intern' },
    { label: 'Resident', id: 'resident' },
    { label: 'Attending', id: 'attending' },
  ],
  engineering: [
    { label: 'Mechanical Engineer', id: 'mechanical-engineer' },
    {
      label: 'Mechanical Engineer with FEA experience',
      id: 'mechanical-engineer-with-fea-experience',
    },
    { label: 'Electrical Engineer', id: 'electrical-engineer' },
    { label: 'Mechatronics Engineer', id: 'mechatronics-engineer' },
  ],
  legal: [
    { label: 'Lawyer', id: 'lawyer' },
    { label: 'Barrister', id: 'barrister' },
    { label: 'Paralegal', id: 'paralegal' },
  ],
  manufacturing: [
    { label: 'FDM 3D printer', id: 'fdm-3-d-printer' },
    { label: 'SLA 3D printer', id: 'sla-3-d-printer' },
    { label: 'SLS Nylon 3D printer', id: 'sls-nylon-3-d-printer' },
    { label: 'Machinist', id: 'machinist' },
  ],
};

const checkboxSections = [
  { staff: staff.medical, label: 'Medical Staff Advisors' },
  { staff: staff.engineering, label: 'Engineering' },
  { staff: staff.manufacturing, label: 'Manufacturing' },
  { staff: staff.legal, label: 'Legal' },
  { staff: staff.cad, label: 'Computer-Aided Design' },
];

const disabledStaff = ['lawyer', 'electrical-engineer', 'intern', 'inventor'];

export { checkboxSections, disabledStaff, staff };

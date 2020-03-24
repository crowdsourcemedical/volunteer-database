import React from 'react';
import CheckBoxSection from '../../src/components/Forms/checkboxSection.js';
import { checkboxesListMock } from '../data';
import { handleCheckBoxSelection } from '../functions';

export default {
    title: 'Checkbox Section',
    component: CheckBoxSection
};

export const CheckBoxComponent = () => (
    <React.Fragment>
        <h1>CheckBox component</h1>
        <CheckBoxSection
            sectionHeader={'Staff required'}
            checkboxes={checkboxesListMock}
            cb={handleCheckBoxSelection}
        ></CheckBoxSection>
    </React.Fragment>
);

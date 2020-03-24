import React from 'react';
import UserSmallCard from '../../src/components/Cards/userSmallCard';
import { mockUser } from '../data';

export default {
    title: 'User Small Card',
    component: UserSmallCard
};

export const UserSmallCardComponent = () => (
    <React.Fragment>
        <h1>User Large Card</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <UserSmallCard user={mockUser} />
        </div>
	</React.Fragment>
);

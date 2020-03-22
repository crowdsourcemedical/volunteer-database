import React from 'react'
import UserSmallCard from '../components/Cards/userSmallCard.js';

const StoryBook = props =>  {


    return (
        <React.Fragment>
            <h1>User Small Card</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <UserSmallCard />
            </div>
        
        </React.Fragment>

    )
}

export default StoryBook;


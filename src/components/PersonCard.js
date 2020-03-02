import React from 'react';
import { render } from '@testing-library/react';

// PersonCard Div useful for displaying a "Card" of user information
const PersonCard = props => {
    // destructuring the props (properties)
    const {firstName, lastName, age, hairColor} = props;
        return ( // no rendering, just returning.
            <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );
}
export default PersonCard;
// Task One (2 points)

// Add the missing code instead of /*...*/.
// This component receives a list of programming languages as a prop `progLangs`.
// `progLangs` is an array of objects.
// Each object has an id and a name { id: 1, name: 'JavaScript' }
// Show the first five programming languages
// by passing the `name` prop to the <ProgLang /> component
// Be careful not to have any warnings

import React from 'react';
import ProgLang from '../ProgLang/ProgLang';

const Programming = props => {
    return (
        <div className="programming-languages-wrapper">
            {/*...*/}
        </div>
    );
}

export default Programming;
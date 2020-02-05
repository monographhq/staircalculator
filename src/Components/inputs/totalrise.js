import React from 'react';
import ImperialTwo from '../dropdowns/imperialTwo';

const TotalRise = (props) => {

    let maxFeetRise = 30 + 1;

    return (
        <div>
            <label>Total rise</label>
            <select>
                {Array.from(Array(maxFeetRise), (e, i) => {
                    return ( <option key={i}>{i +"'"}</option> )
                })}
            </select>
            <ImperialTwo />
        </div>  
    )
}

export default TotalRise
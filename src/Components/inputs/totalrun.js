import React from 'react';
import ImperialTwo from '../dropdowns/imperialTwo';

const TotalRun = (props) => {

    let maxFeetRun = 50 + 1;

    return (
        <div>
            <label>Total run</label>
            <select>
                {Array.from(Array(maxFeetRun), (e, i) => {
                    return ( <option key={i*12}>{i +"'"}</option> )
                })}
            </select>
            <ImperialTwo />
        </div>  
    )
}

export default TotalRun
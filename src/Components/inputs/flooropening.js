import React from 'react';
import ImperialTwo from '../dropdowns/imperialTwo';

const FloorOpening = (props) => {

    let maxOpening = 15 + 1;

    return (
        <div>
            <label>Floor Opening</label>
            <select>
                {Array.from(Array(maxOpening), (e, i) => {
                    return ( <option key={i*12}>{i +"'"}</option> )
                })}
            </select>
            <ImperialTwo />
        </div>  
    )
}

export default FloorOpening
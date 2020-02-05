import React from 'react';
import ImperialTwo from '../dropdowns/imperialTwo';

const Height = (props) => {

    let maxHeight = 15 + 1;

    return (
        <div>
            <label>Height</label>
            <select>
                {Array.from(Array(maxHeight), (e, i) => {
                    return ( <option key={i*12}>{i +"'"}</option> )
                })}
            </select>
            <ImperialTwo />
        </div>  
    )
}

export default Height
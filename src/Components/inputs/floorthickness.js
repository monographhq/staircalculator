import React from 'react';
import ImperialTwo from '../dropdowns/imperialTwo';

const FloorThickness = (props) => {

    let maxThickness = 15 + 1;

    return (
        <div>
            <label>Floor Thickness</label>
            <select>
                {Array.from(Array(maxThickness), (e, i) => {
                    return ( <option key={i*12}>{i +"'"}</option> )
                })}
            </select>
            <ImperialTwo />
        </div>  
    )
}

export default FloorThickness
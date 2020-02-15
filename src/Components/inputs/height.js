import React from 'react';

const Height = (props) => {

    let maxHeight = 15 + 1;
    let selectInches = 11 + 1;
    let selectFractions = 16;



    return (
        <div>
            <label>Height</label>
            <input type="range" min="30" max="45"/>
        </div>  
    )
}

export default Height
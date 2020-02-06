import React from 'react';

const TotalRise = (props) => {

    let maxFeetRise = 30 + 1;
    let selectInches = 11 + 1;
    let selectFractions = 16;

    return (
        <div>
            <label>Total rise</label>
            <select id="totalRise">
                {Array.from(Array(maxFeetRise), (e, i) => {
                    return ( <option key={i}>{i +"'"}</option> )
                })}
            </select>
            <select>
                {Array.from(Array(selectInches), (e, i) => {
                    return ( <option key={i}>{i +'"'}</option> )
                })}
            </select>
            <select>
                {Array.from(Array(selectFractions), (e, i) => {
                    return ( <option key={i * 0.0625}>{i + "/16"}</option> )
                })}
            </select>
        </div>  
    )
}

export default TotalRise
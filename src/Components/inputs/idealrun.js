import React from 'react';

const IdealRun = () => {

    let selectInches = 11 + 1;
    let selectFractions = 16;

    return (
        <div>
            <label>Ideal run</label>
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

export default IdealRun
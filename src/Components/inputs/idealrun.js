import React from 'react';

const IdealRun = (props) => {

    let selectInches = 11 + 1;
    let selectFractions = 16;

    return (
        <div>
            <label>Ideal run</label>
            <select defaultValue={props.idealRunin} onChange={props.changeidealRunin}>
                {Array.from(Array(selectInches), (e, i) => {
                    return ( <option value={i} key={i}>{i +'"'}</option> )
                })}
            </select>
            <select defaultValue={props.idealRunfr} onChange={props.changeidealRunff}>
                {Array.from(Array(selectFractions), (e, i) => {
                    return ( <option value={i} key={i * 0.0625}>{i + "/16"}</option> )
                })}
            </select>
        </div>  
    )
}

export default IdealRun
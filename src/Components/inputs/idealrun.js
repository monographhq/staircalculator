import React from 'react';

const IdealRun = (props) => {

    let selectInches = Array.from({length:36-10+1},(v,k)=>k+10);
    let selectFractions = 16;

    return (
        <div>
            <label className="subtitle d-flex">Ideal run</label>
            <select defaultValue={props.idealRunin} onChange={props.changeidealRunin} className="dropdown">
                {Array.from(selectInches, (i) => {
                    return ( <option value={i} key={i}>{i +'"'}</option> )
                })}
            </select>
            <select defaultValue={props.idealRunfr} onChange={props.changeidealRunfr} className="dropdown">
                {Array.from(Array(selectFractions), (e, i) => {
                    return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                })}
            </select>
        </div>  
    )
}

export default IdealRun
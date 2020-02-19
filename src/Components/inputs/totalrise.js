import React from 'react';

const TotalRise = (props) => {

    let selectFeet = 30 + 1;
    let selectInches = 11 + 1;
    let selectFractions = 16;

    return (
        <div>
            <label class="subtitle d-flex">Total rise</label>
            <select id="totalRiseft" defaultValue={props.totalRiseft} onChange={props.changetotalRiseft} class="dropdown">
                {Array.from(Array(selectFeet), (e, i) => {
                    return ( <option value={i*12} key={i*12}>{i +"'"}</option> )
                })}
            </select>
            <select id="totalRisein" defaultValue={props.totalRisein} onChange={props.changetotalRisein} class="dropdown">
                {Array.from(Array(selectInches), (e, i) => {
                    return ( <option key={i}>{i +'"'}</option> )
                })}
            </select>
            <select id="totalRiseft" defaultValue={props.totalRisefr} onChange={props.changetotalRisefr} class="dropdown">
                {Array.from(Array(selectFractions), (e, i) => {
                    return ( <option key={i * 0.0625}>{i + "/16"}</option> )
                })}
            </select>
        </div>  
    )
}

export default TotalRise
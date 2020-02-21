import React from 'react';

const TotalRun = (props) => {

    let selectFeet = Array.from({length:15-1+1},(v,k)=>k+1);
    let selectInches = 11 + 1;
    let selectFractions = 16;


    return (
        <div>
            <label className="subtitle d-flex">Total run</label>
            <select id="totalRunFeet" defaultValue={props.totalRunft} onChange={props.changetotalRunft} className="dropdown">
                {Array.from(selectFeet, (i) => {
                    return ( <option value={i*12} key={i*12}>{i +"'"}</option> )
                })}
            </select>
            <select id="totalRunInches" defaultValue={props.totalRunin} onChange={props.changetotalRunin} className="dropdown">
                {Array.from(Array(selectInches), (e, i) => {
                    return ( <option value={i} key={i}>{i +'"'}</option> )
                })}
            </select>
            <select id="totalRunFraction" defaultValue={props.totalRunfr} onChange={props.changetotalRunfr} className="dropdown">
                {Array.from(Array(selectFractions), (e, i) => {
                    return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                })}
            </select>
        </div>  
    )
}

export default TotalRun
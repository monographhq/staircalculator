import React from 'react';

const TotalRun = (props) => {

    let selectFeet = 60 + 1;
    let selectInches = 11 + 1;
    let selectFractions = 16;


    return (
        <div>
            <label>Total run</label>
            <select id="totalRunFeet" defaultValue={props.totalRunft} onChange={props.changetotalRunft}>
                {Array.from(Array(selectFeet), (e, i) => {
                    return ( <option value={i*12} key={i*12}>{i +"'"}</option> )
                })}
            </select>
            <select id="totalRunInches" defaultValue={props.totalRunin} onChange={props.changetotalRunin}>
                {Array.from(Array(selectInches), (e, i) => {
                    return ( <option value={i} key={i}>{i +'"'}</option> )
                })}
            </select>
            <select id="totalRunFraction" defaultValue={props.totalRunfr} onChange={props.changetotalRunfr}>
                {Array.from(Array(selectFractions), (e, i) => {
                    return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                })}
            </select>
        </div>  
    )
}

export default TotalRun
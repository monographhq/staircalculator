import React from 'react';

const TotalRun = (props) => {

    let selectFeet = Array.from({length:15-1+1},(v,k)=>k+1);
    let selectInches = 11 + 1;
    let selectFractions = 16;
    let selectInchesMin = Array.from({length:2-1+1},(v,k)=>k+10);

    return (
        <div>
            <label className="subtitle d-flex">Total run</label>
            <div className="d-flex justify-content-start">

            {parseInt(props.totalRunft) === 12 ? (
                <React.Fragment>
                    <select id="totalRunFeet" defaultValue={props.totalRunft} onChange={props.changetotalRunft} className="dropdown dropdown__feet">
                        {Array.from(selectFeet, (i) => {
                            return ( <option value={i*12} key={i*12}>{i +"'"}</option> )
                        })}
                    </select>
                    <select id="totalRunInches" defaultValue={10} onChange={props.changetotalRunin} className="dropdown dropdown__inch">
                        {Array.from(selectInchesMin, (i) => {
                            return ( <option value={i} key={i}>{i +'"'}</option> )
                        })}
                    </select>
                    <select id="totalRunFraction" defaultValue={props.totalRunfr} onChange={props.changetotalRunfr} className="dropdown dropdown__fraction">
                        {Array.from(Array(selectFractions), (e, i) => {
                            return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                        })}
                    </select>
                </React.Fragment>
            ) :
            (
                <React.Fragment>
                    <select id="totalRunFeet" defaultValue={props.totalRunft} onChange={props.changetotalRunft} className="dropdown dropdown__feet">
                        {Array.from(selectFeet, (i) => {
                            return ( <option value={i*12} key={i*12}>{i +"'"}</option> )
                        })}
                    </select>
                    <select id="totalRunInches" defaultValue={props.totalRunin} onChange={props.changetotalRunin} className="dropdown dropdown__inch">
                        {Array.from(Array(selectInches), (e, i) => {
                            return ( <option value={i} key={i}>{i +'"'}</option> )
                        })}
                    </select>
                    <select id="totalRunFraction" defaultValue={props.totalRunfr} onChange={props.changetotalRunfr} className="dropdown dropdown__fraction">
                        {Array.from(Array(selectFractions), (e, i) => {
                            return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                        })}
                    </select>
                </React.Fragment>
            )}

            </div>
        </div>  
    )
}

export default TotalRun
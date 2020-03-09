import React from 'react';

const TotalRise = (props) => {

    let selectFeet = Array.from({length:11-1+1},(v,k)=>k);
    let selectInches = 11 + 1;
    let selectFractions = 16;

    let min = 22 * 25.4;
    let max = 191.9375 * 25.4;

    return (
        <div>
            <label className="subtitle d-flex">Total rise</label>
            <div className="d-flex justify-content-start">
            {props.units ? (
                parseInt(props.totalRiseft) === 0 ? (
                    <React.Fragment>
                        <select id="totalRiseft" defaultValue={props.totalRiseft} onChange={props.changetotalRiseft} className="dropdown dropdown__feet">
                            {Array.from(selectFeet, (i) => {
                                return ( <option value={i*12} key={i*12}>{i +"'"}</option> )
                            })}
                        </select>
                        <select id="totalRisein" defaultValue={props.totalRisein} onChange={props.changetotalRisein} className="dropdown dropdown__inch">
                            <option key={11}>{11 +'"'}</option>
                        </select>
                        <select id="totalRiseft" defaultValue={props.totalRisefr} onChange={props.changetotalRisefr} className="dropdown dropdown__fraction">
                            {Array.from(Array(selectFractions), (e, i) => {
                                return ( <option key={i * 0.0625}>{i + "/16"}</option> )
                            })}
                        </select>
                    </React.Fragment>
                ):
                (
                    <React.Fragment>
                        <select id="totalRiseft" defaultValue={props.totalRiseft} onChange={props.changetotalRiseft} className="dropdown dropdown__feet">
                            {Array.from(selectFeet, (i) => {
                                return ( <option value={i*12} key={i*12}>{i +"'"}</option> )
                            })}
                        </select>
                        <select id="totalRisein" defaultValue={props.totalRisein} onChange={props.changetotalRisein} className="dropdown dropdown__inch">
                            {Array.from(Array(selectInches), (e, i) => {
                                return ( <option key={i}>{i +'"'}</option> )
                            })}
                        </select>
                        <select id="totalRiseft" defaultValue={props.totalRisefr} onChange={props.changetotalRisefr} className="dropdown dropdown__fraction">
                            {Array.from(Array(selectFractions), (e, i) => {
                                return ( <option key={i * 0.0625}>{i + "/16"}</option> )
                            })}
                        </select>
                    </React.Fragment>
                )
            ):
            (
                <input type="number" defaultValue={Math.round(props.totalRisemm)} min={min} max={max} onChange={props.changetotalRisemm} className="dropdown dropdown__mm" />
            )}
            </div>
        </div>  
    )
}

export default TotalRise
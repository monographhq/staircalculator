import React from 'react';

const TotalRise = (props) => {

    let selectFeet = props.topStair ? Array.from({length:11-1+1},(v,k)=>k) : Array.from({length:10-1+1},(v,k)=>k+1)
    let selectInches = 11 + 1;
    let selectFractions = 16;

    let minMM = 22 * 25.4;
    let maxMM = 191.9375 * 25.4;

    let minRisein = props.topStair ? 8 : 6;

    return (
        <div>
            <label className="subtitle d-flex">Total rise</label>
            <div className="d-flex justify-content-start">
            {props.units ? (
                props.topStair ? (
                    parseInt(props.totalRiseft) === 0 ? (
                        <React.Fragment>
                            <select id="totalRiseft" defaultValue={props.totalRiseft} onChange={props.changetotalRiseft} className="dropdown dropdown__feet">
                                {Array.from(selectFeet, (i) => {
                                    return ( <option value={i*12} key={i*12}>{i +"'"}</option> )
                                })}
                            </select>
                            <select id="totalRisein" defaultValue={props.totalRisein} onChange={props.changetotalRisein} className="dropdown dropdown__inch">
                                <option value={minRisein} key={minRisein}>{minRisein +'"'}</option>
                            </select>
                            <select id="totalRiseft" defaultValue={props.totalRisefr} onChange={props.changetotalRisefr} className="dropdown dropdown__fraction">
                                {Array.from(Array(selectFractions), (e, i) => {
                                    return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
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
                                    return ( <option value={i} key={i}>{i +'"'}</option> )
                                })}
                            </select>
                            <select id="totalRiseft" defaultValue={props.totalRisefr} onChange={props.changetotalRisefr} className="dropdown dropdown__fraction">
                                {Array.from(Array(selectFractions), (e, i) => {
                                    return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                                })}
                            </select>
                        </React.Fragment>
                    )
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
                                    return ( <option value={i} key={i}>{i +'"'}</option> )
                                })}
                        </select>
                        <select id="totalRiseft" defaultValue={props.totalRisefr} onChange={props.changetotalRisefr} className="dropdown dropdown__fraction">
                            {Array.from(Array(selectFractions), (e, i) => {
                                return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                            })}
                        </select>
                    </React.Fragment>
                )
            ):
            (
                parseFloat(props.totalRisemm) >= 279.4 && parseFloat(props.totalRisemm) <= 3351.2125 ? (
                    <input type="number" defaultValue={Math.round(props.totalRisemm)} min={minMM} max={maxMM} onChange={props.changetotalRisemm} className="dropdown dropdown__mm" />
                ):
                (
                    <input type="number" defaultValue={Math.round(props.totalRisemm)} min={minMM} max={maxMM} onChange={props.changetotalRisemm} className="dropdown--red dropdown__mm" />
                )
            )}
            </div>
        </div>  
    )
}

export default TotalRise
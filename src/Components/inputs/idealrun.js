import React from 'react';

const IdealRun = (props) => {

    let selectInches = Array.from({length:24-10+1},(v,k)=>k+10);
    let selectFractions = 16;

    let idealMin = 10 * 25.4;
    let idealMax = (24 + 0.0625 * 15) * 25.4;

    return (
        <div>
            <label className="subtitle d-flex">Ideal run</label>
            <div className="d-flex justify-content-start">
                {props.units ? (
                    <React.Fragment>
                        <select value={props.idealRunin} onChange={props.changeidealRunin} className="dropdown dropdown__inch">
                            {Array.from(selectInches, (i) => {
                                return ( <option value={i} key={i}>{i +'"'}</option> )
                            })}
                        </select>
                        <select value={props.idealRunfr} onChange={props.changeidealRunfr} className="dropdown dropdown__fraction">
                            {Array.from(Array(selectFractions), (e, i) => {
                                return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                            })}
                        </select>
                    </React.Fragment>
                ):
                (
                    <input type="number" defaultValue={Math.round(props.idealRunmm)} min={idealMin} max={idealMax} onChange={props.changeidealRunmm} className="dropdown dropdown__mm" />
                )}
            </div>
        </div>  
    )
}

export default IdealRun
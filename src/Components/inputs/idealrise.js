import React from 'react';

const IdealRise = (props) => {

    let selectInches = Array.from({length:7-4+1},(v,k)=>k+4);
    let selectFractions = 12;

    return (
        <div>
            <label className="subtitle d-flex">Ideal rise</label>
            <div className="select-container">
                <select defaultValue={props.idealRisein} onChange={props.changeidealRisein} className="dropdown dropdown__inch">
                    {Array.from(selectInches, (i) => {
                        return ( <option value={i} key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select defaultValue={props.idealRisefr} onChange={props.changeidealRisefr} className="dropdown dropdown__fraction">
                    {Array.from(Array(selectFractions), (e, i) => {
                        return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>
        </div>  

    )
}

export default IdealRise
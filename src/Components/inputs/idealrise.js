import React from 'react';

const IdealRise = (props) => {

    let selectInches = 11 + 1;
    let selectFractions = 16;

    return (
        <div>
            <label>Ideal rise</label>
            <select defaultValue={props.idealRisein} onChange={props.changeidealRisein}>
                {Array.from(Array(selectInches), (e, i) => {
                    return ( <option value={i} key={i}>{i +'"'}</option> )
                })}
            </select>
            <select defaultValue={props.idealRisefr} onChange={props.changeidealRisefr}>
                {Array.from(Array(selectFractions), (e, i) => {
                    return ( <option value={i} key={i * 0.0625}>{i + "/16"}</option> )
                })}
            </select>
        </div>  

    )
}

export default IdealRise
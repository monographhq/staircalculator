import React from 'react';

const IdealRise = (props) => {

    let selectInches = 11 + 1;
    let selectFractions = 16;

    return (
        <div>
            <label class="subtitle d-flex">Ideal rise</label>
            <select defaultValue={props.idealRisein} onChange={props.changeidealRisein} class="dropdown dropdown__inch">
                {Array.from(Array(selectInches), (e, i) => {
                    return ( <option value={i} key={i}>{i +'"'}</option> )
                })}
            </select>
            <select defaultValue={props.idealRisefr} onChange={props.changeidealRisefr} class="dropdown dropdown__fraction">
                {Array.from(Array(selectFractions), (e, i) => {
                    return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                })}
            </select>
        </div>  

    )
}

export default IdealRise
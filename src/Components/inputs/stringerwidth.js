import React from 'react';

const Stringer = (props) => {

    let selectInches = 11 + 1;
    let selectFractions = 16;

    return (
        <div>
            <label className="subtitle">Stringer Width</label>
            <select defaultValue={props.stringerin} onChange={props.changestringerin} className="dropdown">
                {Array.from(Array(selectInches), (e, i) => {
                    return ( <option value={i} key={i}>{i +'"'}</option> )
                })}
            </select>
            <select defaultValue={props.stringerfr} onChange={props.changestringerfr} className="dropdown">
                {Array.from(Array(selectFractions), (e, i) => {
                    return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                })}
            </select>
        </div>  

    )
}

export default IdealRise
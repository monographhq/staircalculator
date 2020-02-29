import React from 'react';

const Stringer = (props) => {

    let stringerInches = Array.from({length:11-5+1},(v,k)=>k+5);
    let selectFractions = 16;

    return (
        <div>
                <label className="subtitle d-flex">Stringer Width</label>
                <select defaultValue={props.stringerin} onChange={props.changestringerin} className="dropdown dropdown__inch">
                    {Array.from(stringerInches, (i) => {
                        return ( <option value={i} key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select defaultValue={props.stringerfr} onChange={props.changestringerfr} className="dropdown dropdown__fraction">
                    {Array.from(Array(selectFractions), (e, i) => {
                        return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>

    )
}

export default Stringer
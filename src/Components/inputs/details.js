import React from 'react';

const Details = (props) => {

    let selectInches = 6 + 1;
    let selectFractions = 16;
    let selectStringer = 11 + 1;

    return (
        <div>
            <div>Details</div>
            <div>
                <label>Tread thickness</label>
                <select defaultValue={props.treadin} onChange={props.changetreadin}>
                    {Array.from(Array(selectInches), (e, i) => {
                        return ( <option value={i} key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select defaultValue="0" onChange={props.changetreadfr}>
                    {Array.from(Array(selectFractions), (e, i) => {
                        return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>
            <div>
                <label>Riser thickness</label>
                <select defaultValue={props.riserin} onChange={props.changeriserin}>
                    {Array.from(Array(selectInches), (e, i) => {
                        return ( <option value={i} key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select defaultValue="0" onChange={props.changeriserfr}>
                    {Array.from(Array(selectFractions), (e, i) => {
                        return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>
            <div>
                <label>Nosing</label>
                <select defaultValue="0" onChange={props.changenosingin}>
                    {Array.from(Array(selectInches), (e, i) => {
                        return ( <option value={i} key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select defaultValue="0" onChange={props.changenosingfr}>
                    {Array.from(Array(selectFractions), (e, i) => {
                        return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>
            <div>
                <label>Stringer Width</label>
                <select defaultValue={props.stringerin} onChange={props.changestringerin}>
                    {Array.from(Array(selectStringer), (e, i) => {
                        return ( <option value={i} key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select defaultValue={props.stringerfr} onChange={props.changestringerfr}>
                    {Array.from(Array(selectFractions), (e, i) => {
                        return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>
        </div>
    )
}

export default Details 
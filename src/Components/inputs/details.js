import React from 'react';

const Details = (props) => {

    let stringerInches = Array.from({length:11-5+1},(v,k)=>k+5);
    let treadInches = 1 + 1;
    let nosingInches = 1 + 1;
    let nosingFractions = 8 + 1;
    let selectFractions = 16;

    return (
        <div>
            <div className="title">Details</div>
            <div>
                <label className="subtitle d-flex">Tread thickness</label>
                <select defaultValue={props.treadin} onChange={props.changetreadin} className="dropdown">
                    {Array.from(Array(treadInches), (e, i) => {
                        return ( <option value={i} key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select defaultValue="0" onChange={props.changetreadfr} className="dropdown">
                    {Array.from(Array(selectFractions), (e, i) => {
                        return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>
            <div>
                <label className="subtitle d-flex">Riser thickness</label>
                <select defaultValue={props.riserin} onChange={props.changeriserin} className="dropdown">
                    {Array.from(Array(treadInches), (e, i) => {
                        return ( <option value={i} key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select defaultValue="0" onChange={props.changeriserfr} className="dropdown">
                    {Array.from(Array(selectFractions), (e, i) => {
                        return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>
            <div>
                <label className="subtitle d-flex">Nosing</label>
                <select defaultValue="0" onChange={props.changenosingin} className="dropdown">
                    {Array.from(Array(nosingInches), (e, i) => {
                        return ( <option value={i} key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select defaultValue="0" onChange={props.changenosingfr} className="dropdown">
                    {Array.from(Array(nosingFractions), (e, i) => {
                        return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>
            <div>
                <label className="subtitle d-flex">Stringer Width</label>
                <select defaultValue={props.stringerin} onChange={props.changestringerin}>
                    {Array.from(stringerInches, (i) => {
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
import React from 'react';

const Details = (props) => {

    let selectInches = 6 + 1;
    let selectFractions = 16;
    let selectStringer = 11 + 1;

    return (
        <div>
            <div class="title">Details</div>
            <div>
                <label class="subtitle d-flex">Tread thickness</label>
                <select defaultValue={props.treadin} onChange={props.changetreadin} class="dropdown">
                    {Array.from(Array(selectInches), (e, i) => {
                        return ( <option value={i} key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select defaultValue="0" onChange={props.changetreadfr} class="dropdown">
                    {Array.from(Array(selectFractions), (e, i) => {
                        return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>
            <div>
                <label class="subtitle d-flex">Riser thickness</label>
                <select defaultValue={props.riserin} onChange={props.changeriserin} class="dropdown">
                    {Array.from(Array(selectInches), (e, i) => {
                        return ( <option value={i} key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select defaultValue="0" onChange={props.changeriserfr} class="dropdown">
                    {Array.from(Array(selectFractions), (e, i) => {
                        return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>
            <div>
                <label class="subtitle d-flex">Nosing</label>
                <select defaultValue="0" onChange={props.changenosingin} class="dropdown">
                    {Array.from(Array(selectInches), (e, i) => {
                        return ( <option value={i} key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select defaultValue="0" onChange={props.changenosingfr} class="dropdown">
                    {Array.from(Array(selectFractions), (e, i) => {
                        return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>
            <div>
                <label class="subtitle d-flex">Stringer Width</label>
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
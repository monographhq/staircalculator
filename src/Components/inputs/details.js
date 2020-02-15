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
                <select>
                    {Array.from(Array(selectInches), (e, i) => {
                        return ( <option key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select>
                    {Array.from(Array(selectFractions), (e, i) => {
                        return ( <option key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>
            <div>
                <label>Riser thickness</label>
                <select>
                    {Array.from(Array(selectInches), (e, i) => {
                        return ( <option key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select>
                    {Array.from(Array(selectFractions), (e, i) => {
                        return ( <option key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>
            <div>
                <label>Nosing</label>
                <select>
                    {Array.from(Array(selectInches), (e, i) => {
                        return ( <option key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select>
                    {Array.from(Array(selectFractions), (e, i) => {
                        return ( <option key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>
            <div>
                <label>Stringer Width</label>
                <select defaultValue={props.stringerin} onChange={props.changestringerin}>
                    {Array.from(Array(selectStringer), (e, i) => {
                        return ( <option key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select defaultValue={props.stringerfr} onChange={props.changestringerfr}>
                    {Array.from(Array(selectFractions), (e, i) => {
                        return ( <option key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>
        </div>
    )
}

export default Details 
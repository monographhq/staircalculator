import React from 'react';

const Details = () => {

    let selectInches = 6 + 1;
    let selectFractions = 16;

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
        </div>
    )
}

export default Details 
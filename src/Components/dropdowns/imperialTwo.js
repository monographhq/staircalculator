import React from 'react';

const ImperialTwo = (props) => {

    let selectInches = 11 + 1;
    let selectFractions = 16;

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default ImperialTwo;
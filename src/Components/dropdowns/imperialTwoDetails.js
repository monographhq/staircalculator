import React from 'react';

const ImperialTwoDetails = (props) => {

    let selectInches = 6 + 1;
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

export default ImperialTwoDetails;
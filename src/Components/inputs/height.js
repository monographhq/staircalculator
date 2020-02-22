import React from 'react';

const Height = (props) => {

    let totalRun = parseInt(props.totalRunft) + parseInt(props.totalRunin) + parseFloat(props.totalRunfr);
    let headroomMax = parseFloat(totalRun / 2);

    return (
        <div>
            <label className="subtitle d-flex">Height</label>
            <input type="range" defaultValue="0" min="0" max={headroomMax} onChange={props.changeheadroomlength} className="slider"/>
        </div>  
    )
}

export default Height
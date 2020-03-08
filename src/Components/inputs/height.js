import React from 'react';

const Height = (props) => {

    let totalRun = 
        props.units ? (
            parseInt(props.totalRunft) + parseInt(props.totalRunin) + parseFloat(props.totalRunfr)
        ):
        (
            parseFloat(props.totalRunmm)
        )

    let headroomMax = parseFloat(totalRun / 3);

    return (
        <div>
            <label className="subtitle d-flex">Height</label>
            <input type="range" defaultValue="0" min="0" step="0.01" max={headroomMax} onChange={props.changeheadroomlength} className="slider slider__height"/>
        </div>  
    )
}

export default Height
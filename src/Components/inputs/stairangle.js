import React from 'react';

const StairAngle = (props) => {
  
    let idealRun = parseFloat(props.idealRunin) + parseFloat(props.idealRunfr);
    let idealRise = parseFloat(props.idealRisein) + parseFloat(props.idealRisefr);

    let stairAngle = (Math.atan((idealRise/idealRun)) * (180/Math.PI)).toFixed(1);

    return (
        <div className="sidebar__section--last sidebar__section">
            <label className="title d-flex">Stair Angle</label>
            <div className="d-flex justify-content-between">
                <span className="stairangle__number dropdown">{stairAngle + '°'}</span>
                <input type="range" defaultValue={stairAngle} min="30" max="45" className="slider slider__angle"/>
            </div>
        </div>  
    )
}

export default StairAngle
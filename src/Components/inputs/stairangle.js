import React from 'react';

const StairAngle = (props) => {
  
    let idealRun = parseFloat(props.idealRunin) + parseFloat(props.idealRunfr);
    let idealRise = parseFloat(props.idealRisein) + parseFloat(props.idealRisefr);

    let stairAngle = (Math.atan((idealRise/idealRun)) * (180/Math.PI)).toFixed(1);

    return (
        <div className="sidebar__section--last sidebar__section">
            <label className="title d-flex">Stair Angle</label>
            <span className="stairangle__number">{stairAngle + '°'}</span>
            <input type="range" defaultValue={stairAngle} min="30" max="45"/>
        </div>  
    )
}

export default StairAngle
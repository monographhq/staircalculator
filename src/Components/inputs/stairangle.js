import React from 'react';

const StairAngle = (props) => {

    return (
        <div className="sidebar__section--last sidebar__section">
            <label className="title d-flex">Stair Angle</label>
            <div className="d-flex justify-content-between">
                <span className="stairangle__number dropdown">{props.stairAngle + '°'}</span>
                <input type="range" defaultValue={props.stairAngle} min="30" max="45" step="0.1" onChange={props.changeStairAngle} className="slider slider__angle"/>
            </div>
        </div>  
    )
}

export default StairAngle
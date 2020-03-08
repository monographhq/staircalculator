import React, { useState } from 'react';


const StairAngle = (props) => {

    // const [fieldValue, setFieldValue] = useState(props.stairAngle);
    // const parseField = (inputValue) => {
    //     if(inputValue >= 25 && inputValue <= 45) {
    //         setFieldValue(inputValue);
    //         props.changeStairAngle;
    //     }
    // }
    
    return (
        <div className="sidebar__section--last sidebar__section">
            <label className="title d-flex">Stair Angle</label>
            <div className="d-flex justify-content-between sidebar__section--stairangle">
                <input type="number" value={props.stairAngle} min="25" max="45" step="0.1" onChange={props.changeStairAngle} className="stairangle__number dropdown"/>
                <input type="range" value={props.stairAngle} min="25" max="45" step="0.01" onChange={props.changeStairAngle} className="slider slider__angle"/>
            </div>
        </div>  
    )
}

export default StairAngle
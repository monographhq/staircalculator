import React from "react";

const StairAngle = (props) => {
  return (
    <div className="sidebar__section">
      <label className="title d-flex">Stair Angle</label>
      <div className="d-flex justify-content-between sidebar__section--stairangle">
        {props.stairAngle >= 25 && props.stairAngle <= 45 ? (
          <input
            type="number"
            value={props.stairAngle}
            min="25"
            max="45"
            step="0.1"
            onChange={props.changeStairAngle}
            className="stairangle__number dropdown"
          />
        ) : (
          <input
            type="number"
            value={props.stairAngle}
            min="25"
            max="45"
            step="0.1"
            onChange={props.changeStairAngle}
            className="stairangle__number dropdown--red"
          />
        )}
        <input
          type="range"
          value={props.stairAngle}
          min="25"
          max="45"
          step="0.01"
          onChange={props.changeStairAngle}
          className="slider slider__angle"
        />
      </div>
    </div>
  );
};

export default StairAngle;

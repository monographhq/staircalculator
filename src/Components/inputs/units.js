import React from 'react';

const Units = (props) => {

    let unitsTrue = props.units;

    return (
        <div>
            <div className="subtitle">Units</div>
            {unitsTrue ? (
                <div className="toggle-group">
                    <button className="toggle toggle__left toggle--active" onClick={props.changeUnitsIn}>IN</button>
                    <button className="toggle toggle__right toggle--inactive" onClick={props.changeUnitsMM}>MM</button>
                </div>
            ) : (
                <div className="toggle-group">
                    <button className="toggle toggle__left toggle--inactive" onClick={props.changeUnitsIn}>IN</button>
                    <button className="toggle toggle__right toggle--active" onClick={props.changeUnitsMM}>MM</button>
                </div>
            )}
        </div>
    )
}

export default Units
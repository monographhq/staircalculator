import React from 'react';

const Units = (props) => {
    if (props.units === true){
        return (
                <div>
                    <div className="subtitle">Units</div>
                    <button className="toggle-active" onClick={props.changeUnits}>IN</button>
                    <button className="toggle-inactive" onClick={props.changeUnits}>MM</button>
                </div>
        )
    } else if (props.units === false){
        return (
            <div>
                <div className="subtitle">Units</div>
                <button className="toggle-inactive" onClick={props.changeUnits}>IN</button>
                <button className="toggle-active" onClick={props.changeUnits}>MM</button>
            </div>
    )
    }
}

export default Units
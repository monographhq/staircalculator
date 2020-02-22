import React from 'react';

const Dimensions = (props) => {
    if (props.dimensions === true){
        return (
                <div>
                    <div className="subtitle">Dimensions</div>
                    <div className="d-flex">
                        <button className="toggle-active" onClick={props.changeUnits}>ON</button>
                        <button className="toggle-inactive" onClick={props.changeUnits}>OFF</button>
                    </div>
                </div>
        )
    } else if (props.dimensions === false){
        return (
            <div>
                <div className="subtitle">Dimensions</div>
                <button className="toggle-inactive" onClick={props.changeUnits}>ON</button>
                <button className="toggle-active" onClick={props.changeUnits}>OFF</button>
            </div>
    )
    }
}

export default Dimensions
import React from 'react';

const Dimensions = (props) => {
    
    let dimensionsTrue = props.dimensions;

    return (
        <div>
            <div className="subtitle">Dimensions</div>
            {dimensionsTrue ? (
                <div className="toggle-group d-flex justify-content-between">
                    <button className="toggle toggle__left toggle--active" onClick={props.changeDimensionsOn}>ON</button>
                    <button className="toggle toggle__right toggle--inactive" onClick={props.changeDimensionsOff}>OFF</button>
                </div>
        ) : (
                <div className="toggle-group d-flex justify-content-between">
                    <button className="toggle toggle__left toggle--inactive" onClick={props.changeDimensionsOn}>ON</button>
                    <button className="toggle toggle__right toggle--active" onClick={props.changeDimensionsOff}>OFF</button>
                </div>
        )}
        </div>
    )
}

export default Dimensions
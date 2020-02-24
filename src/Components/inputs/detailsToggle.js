import React from 'react';

const DetailsToggle = (props) => {
    
    let detailsTrue = props.details;

    return (
        <div>
            <div className="subtitle">Details</div>
            {detailsTrue ? (
                <div className="toggle-group d-flex justify-content-between">
                    <button className="toggle toggle__left toggle--active" onClick={props.changeDetailsOn}>ON</button>
                    <button className="toggle toggle__right toggle--inactive" onClick={props.changeDetailsOff}>OFF</button>
                </div>
        ) : (
                <div className="toggle-group d-flex justify-content-between">
                    <button className="toggle toggle__left toggle--inactive" onClick={props.changeDetailsOn}>ON</button>
                    <button className="toggle toggle__right toggle--active" onClick={props.changeDetailsOff}>OFF</button>
                </div>
        )}
        </div>
    )
}

export default DetailsToggle
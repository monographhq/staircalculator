import React from 'react';

const Units = (props) => {

        return (
                <div>
                    <div className="subtitle">Units</div>
                    <button className="toggle toggle__left toggle--active" value={true} onClick={props.changeUnits}>IN</button>
                    <button className="toggle toggle__right toggle--inactive" value={false} onClick={props.changeUnits}>MM</button>
                </div>
        )
}

export default Units
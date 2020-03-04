import React from 'react';

const Topstair = (props) => {

    let topStair = props.topStair;

    return (
        <div>
            <div className="subtitle">Top Stair</div>
            {topStair ? (
                <div className="toggle-group d-flex justify-content-between">
                    <button className="toggle toggle__left toggle--active" onClick={props.changeTopStairOn}>ON</button>
                    <button className="toggle toggle__right toggle--inactive" onClick={props.changeTopStairOff}>OFF</button>
                </div>
            ) : (
                <div className="toggle-group d-flex justify-content-between">
                    <button className="toggle toggle__left toggle--inactive" onClick={props.changeTopStairOn}>ON</button>
                    <button className="toggle toggle__right toggle--active" onClick={props.changeTopStairOff}>OFF</button>
                </div>
            )}
        </div>
    )
}

export default Topstair
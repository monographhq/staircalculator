import React from "react";

const Topstair = (props) => {
  let topStair = props.topStair;

  return (
    <div>
      <div className="subtitle subtitle--sm">Top Stair</div>
      <div className="toggle-group d-flex justify-content-between">
        <button
          className={`toggle toggle__left toggle--sm ${
            topStair ? "toggle--active" : ""
          }`}
          onClick={props.changeTopStairOn}
        >
          ON
        </button>
        <button
          className={`toggle toggle__right toggle--sm ${
            !topStair ? "toggle--active" : ""
          }`}
          onClick={props.changeTopStairOff}
        >
          OFF
        </button>
      </div>
    </div>
  );
};

export default Topstair;

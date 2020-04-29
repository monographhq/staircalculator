import React from "react";

const DetailsToggle = (props) => {
  let detailsTrue = props.details;

  return (
    <div>
      <div className="subtitle subtitle--sm">Treads & Risers</div>
      <div className="toggle-group d-flex justify-content-between">
        <button
          className={`toggle toggle__left toggle--sm ${
            detailsTrue ? "toggle--active" : ""
          }`}
          onClick={props.changeDetailsOn}
        >
          ON
        </button>
        <button
          className={`toggle toggle__right toggle--sm ${
            !detailsTrue ? "toggle--active" : ""
          }`}
          onClick={props.changeDetailsOff}
        >
          OFF
        </button>
      </div>
    </div>
  );
};

export default DetailsToggle;

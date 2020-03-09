import React from 'react';

const FloorThickness = (props) => {

    let maxThickness = 1+1;
    let selectInches = 11 + 1;
    let selectFractions = 16;
    let selectInchesMin = Array.from({length:6-1+1},(v,k)=>k+6);

    let floorMin = 152.4;
    let floorMax = 608.0125;

    return (
        <div>
            <label className="subtitle d-flex">Floor Thickness</label>
            <div className="d-flex justify-content-start">
                {props.units ? (
                    <React.Fragment>
                        <select defaultValue={props.floorft} onChange={props.changefloorft} className="dropdown dropdown__feet">
                            {Array.from(Array(maxThickness), (e, i) => {
                                return ( <option value={i*12} key={i*12}>{i +"'"}</option> )
                            })}
                        </select>
                        {parseInt(props.floorft) === 0 ? (
                        <select defaultValue={props.floorin} onChange={props.changefloorin} className="dropdown dropdown__inch">
                            {Array.from(selectInchesMin, (i) => {
                                return ( <option value={i} key={i}>{i +'"'}</option> )
                            })}
                        </select>
                        ): 
                        (
                        <select defaultValue={props.floorin} onChange={props.changefloorin} className="dropdown dropdown__inch">
                            {Array.from(Array(selectInches), (e, i) => {
                                return ( <option value={i} key={i}>{i +'"'}</option> )
                            })}
                        </select> 
                        )}
                        <select defaultValue={props.floorfr} onChange={props.changefloorfr} className="dropdown dropdown__fraction">
                            {Array.from(Array(selectFractions), (e, i) => {
                                return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                            })}
                        </select>
                    </React.Fragment>
                ):
                (
                    parseFloat(props.floormm) >= floorMin && parseFloat(props.floormm) <= floorMax ? (
                        <input type="number" defaultValue={Math.round(props.floormm)} min={floorMin} max={floorMax} onChange={props.changefloormm} className="dropdown dropdown__mm" />
                    ):
                    (
                        <input type="number" defaultValue={Math.round(props.floormm)} min={floorMin} max={floorMax} onChange={props.changefloormm} className="dropdown--red dropdown__mm" />
                    )
                )}
            </div>
        </div>  
    )
}

export default FloorThickness
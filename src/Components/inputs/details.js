import React from 'react';

const Details = (props) => {
    
    let treadInches = 1 + 1;
    let nosingInches = 1 + 1;
    let nosingFractionsMin = Array.from({length:12-5+1},(v,k)=>k+8);
    let nosingFractionsMax = Array.from({length:13-5+1},(v,k)=>k+0);
    let selectFractions = 16;
    let stringerInches = Array.from({length:11-5+1},(v,k)=>k+5);

    let nosingMin = 0;
    let nosingMax = (1 + (0.0625 * 8)) * 25.4;

    let treadMin = 0;
    let treadMax = 49.2125;

    let riserMin = 0;
    let riserMax = 49.2125;

    let stringerMin = 5 * 25.4;
    let stringerMax = (11 + (0.0625 * 15)) * 25.4;

    return (
        <div className="sidebar__section  sidebar__section--third">
            <div className="title">Details</div>
            {props.details ? (
                <React.Fragment>
            <div>
                <label className="subtitle d-flex">Tread thickness</label>
                <div className="d-flex justify-content-start">
                    {props.units ? (
                        <React.Fragment>
                            <select defaultValue={props.treadin} onChange={props.changetreadin} className="dropdown dropdown__inch">
                                {Array.from(Array(treadInches), (e, i) => {
                                    return ( <option value={i} key={i}>{i +'"'}</option> )
                                })}
                            </select>
                            <select defaultValue="0" onChange={props.changetreadfr} className="dropdown dropdown__fraction">
                                {Array.from(Array(selectFractions), (e, i) => {
                                    return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                                })}
                            </select>
                        </React.Fragment>
                    ):
                    (
                        parseFloat(props.treadmm) >= treadMin && parseFloat(props.treadmm) <= treadMax ? (
                            <input type="number" defaultValue={Math.round(props.treadmm)} min={treadMin} max={treadMax} onChange={props.changetreadmm} className="dropdown dropdown__mm" />
                        ):
                        (
                            <input type="number" defaultValue={Math.round(props.treadmm)} min={treadMin} max={treadMax} onChange={props.changetreadmm} className="dropdown--red dropdown__mm" />
                        )
                    )}
                </div>
            </div>

            <div>
                <label className="subtitle d-flex">Riser thickness</label>
                {props.units ? (
                    <React.Fragment>
                        <select defaultValue={props.riserin} onChange={props.changeriserin} className="dropdown dropdown__inch">
                            {Array.from(Array(treadInches), (e, i) => {
                                return ( <option value={i} key={i}>{i +'"'}</option> )
                            })}
                        </select>
                        <select defaultValue="0" onChange={props.changeriserfr} className="dropdown dropdown__fraction">
                            {Array.from(Array(selectFractions), (e, i) => {
                                return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                            })}
                        </select>
                    </React.Fragment>
                ):
                (
                    parseFloat(props.risermm) >= riserMin && parseFloat(props.risermm) <= riserMax ? (
                        <input type="number" defaultValue={Math.round(props.risermm)} min={riserMin} max={riserMax} onChange={props.changerisermm} className="dropdown dropdown__mm" />
                    ):
                    (
                        <input type="number" defaultValue={Math.round(props.risermm)} min={riserMin} max={riserMax} onChange={props.changerisermm} className="dropdown--red dropdown__mm" />
                    )
                )}
            </div>
            {props.units  ? (
                props.nosingin === 0 ? (
                    <div>
                        <label className="subtitle d-flex">Nosing</label>
                        <select defaultValue={0} onChange={props.changenosingin} className="dropdown dropdown__inch">
                            {Array.from(Array(nosingInches), (e, i) => {
                                return ( <option value={i} key={i}>{i +'"'}</option> )
                            })}
                        </select>
                        <select defaultValue={props.nosingfr} onChange={props.changenosingfr} className="dropdown dropdown__fraction">
                            {Array.from(nosingFractionsMin, (i) => {
                                return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                            })}
                        </select>
                    </div>
                ):
                (
                    <div>
                        <label className="subtitle d-flex">Nosing</label>
                        <select defaultValue={0} onChange={props.changenosingin} className="dropdown dropdown__inch">
                            {Array.from(Array(nosingInches), (e, i) => {
                                return ( <option value={i} key={i}>{i +'"'}</option> )
                            })}
                        </select>
                        <select defaultValue={props.nosingfr} onChange={props.changenosingfr} className="dropdown dropdown__fraction">
                            {Array.from(nosingFractionsMax, (i) => {
                                return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                            })}
                        </select>
                    </div>
                )

            ):
            (   
                <div>
                    <label className="subtitle d-flex">Nosing</label>
                    {parseFloat(props.nosingmm) >= nosingMin && parseFloat(props.nosingmm) <= nosingMax ? (
                        <input type="number" defaultValue={Math.round(props.nosingmm)} min={nosingMin} max={nosingMax} onChange={props.changenosingmm} className="dropdown dropdown__mm" />
                    ):
                    (
                        <input type="number" defaultValue={Math.round(props.nosingmm)} min={nosingMin} max={nosingMax} onChange={props.changenosingmm} className="dropdown--red dropdown__mm" />
                    )}
                </div>
            )}

            <div>
                <label className="subtitle d-flex">Stringer Width</label>
                {props.units ? (
                    <React.Fragment>
                        <select defaultValue={props.stringerin} onChange={props.changestringerin} className="dropdown dropdown__inch">
                            {Array.from(stringerInches, (i) => {
                                return ( <option value={i} key={i}>{i +'"'}</option> )
                            })}
                        </select>
                        <select defaultValue={props.stringerfr} onChange={props.changestringerfr} className="dropdown dropdown__fraction">
                            {Array.from(Array(selectFractions), (e, i) => {
                                return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                            })}
                        </select>
                    </React.Fragment>
                ):
                (
                    parseFloat(props.stringermm) >= stringerMin && parseFloat(props.stringermm) <= stringerMax ? (
                        <input type="number" defaultValue={Math.round(props.stringermm)} min={stringerMin} max={stringerMax} onChange={props.changestringermm} className="dropdown dropdown__mm" />
                    ):
                    (
                        <input type="number" defaultValue={Math.round(props.stringermm)} min={stringerMin} max={stringerMax} onChange={props.changestringermm} className="dropdown--red dropdown__mm" />
                    )
                )}
            </div>
            </React.Fragment>

            ):
            (

            <React.Fragment>
                <div>
                    <label className="subtitle d-flex">Tread thickness</label>
                    <div className="d-flex justify-content-start">
                        {props.units ? (
                            <React.Fragment>
                                <select defaultValue={props.treadin} onChange={props.changetreadin} className="dropdown dropdown__inch disabled">
                                    {Array.from(Array(treadInches), (e, i) => {
                                        return ( <option value={i} key={i}>{i +'"'}</option> )
                                    })}
                                </select>
                                <select defaultValue="0" onChange={props.changetreadfr} className="dropdown dropdown__fraction disabled">
                                    {Array.from(Array(selectFractions), (e, i) => {
                                        return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                                    })}
                                </select>
                            </React.Fragment>
                        ):
                        (
                            <input type="number" defaultValue={Math.round(props.treadmm)} min={treadMin} max={treadMax} onChange={props.changetreadmm} className="dropdown dropdown__mm" />
                        )}
                    </div>                                                          
                </div>

                <div>
                    <label className="subtitle d-flex">Riser thickness</label>
                    {props.units ? (
                        <React.Fragment>
                            <select defaultValue={props.riserin} onChange={props.changeriserin} className="dropdown dropdown__inch disabled">
                                {Array.from(Array(treadInches), (e, i) => {
                                    return ( <option value={i} key={i}>{i +'"'}</option> )
                                })}
                            </select>
                            <select defaultValue="0" onChange={props.changeriserfr} className="dropdown dropdown__fraction disabled">
                                {Array.from(Array(selectFractions), (e, i) => {
                                    return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                                })}
                            </select>
                        </React.Fragment>
                    ):
                    (
                        <input type="number" defaultValue={Math.round(props.risermm)} min={riserMin} max={riserMax} onChange={props.changerisermm} className="dropdown dropdown__mm" />        
                    )}
                </div>
                
                <div>
                    <label className="subtitle d-flex">Nosing</label>
                        {props.units ? (
                            <React.Fragment>
                                <select defaultValue="0" onChange={props.changenosingin} className="dropdown dropdown__inch disabled">
                                    {Array.from(Array(nosingInches), (e, i) => {
                                        return ( <option value={i} key={i}>{i +'"'}</option> )
                                    })}
                                </select>
                                <select defaultValue={props.nosingfr} onChange={props.changenosingfr} className="dropdown dropdown__fraction disabled">
                                    {Array.from(Array(16), (e, i) => {
                                        return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                                    })}
                                </select>
                            </React.Fragment>
                        ):
                        (
                            <input type="number" defaultValue={Math.round(props.nosingmm)} min={nosingMin} max={nosingMax} onChange={props.changenosingmm} className="dropdown dropdown__mm" />  
                        )}
                </div>

                <div>
                    <label className="subtitle d-flex">Stringer Width</label>
                        {props.units ? (
                            <React.Fragment>
                                <select defaultValue={props.stringerin} onChange={props.changestringerin} className="dropdown dropdown__inch">
                                    {Array.from(stringerInches, (i) => {
                                        return ( <option value={i} key={i}>{i +'"'}</option> )
                                    })}
                                </select>
                                <select defaultValue={props.stringerfr} onChange={props.changestringerfr} className="dropdown dropdown__fraction">
                                    {Array.from(Array(selectFractions), (e, i) => {
                                        return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                                    })}
                                </select>
                            </React.Fragment>
                        ):
                        (
                            <input type="number" defaultValue={Math.round(props.stringermm)} min={stringerMin} max={stringerMax} onChange={props.changestringermm} className="dropdown dropdown__mm" />  
                        )}
                </div>
        
            </React.Fragment>
            )}
            
        </div>
        
    )
}

export default Details 
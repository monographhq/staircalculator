import React from 'react';

const Details = (props) => {

    let stringerInches = Array.from({length:11-5+1},(v,k)=>k+5);
    let treadInches = 1 + 1;
    let nosingInches = 1 + 1;
    let nosingFractions = 15 + 1;
    let selectFractions = 16;

    let detailsTrue = props.details;

    return (
        <div className="sidebar__section">
            <div className="title">Details</div>

            {detailsTrue ? (
                <React.Fragment>
            <div>
                <label className="subtitle d-flex">Tread thickness</label>
                <div className="d-flex justify-content-start">
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
                </div>
            </div>

            <div>
                <label className="subtitle d-flex">Riser thickness</label>
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
            </div>

            <div>
                <label className="subtitle d-flex">Nosing</label>
                <select defaultValue="0" onChange={props.changenosingin} className="dropdown dropdown__inch">
                    {Array.from(Array(nosingInches), (e, i) => {
                        return ( <option value={i} key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select defaultValue="0" onChange={props.changenosingfr} className="dropdown dropdown__fraction">
                    {Array.from(Array(nosingFractions), (e, i) => {
                        return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>

            <div>
                <label className="subtitle d-flex">Stringer Width</label>
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
            </div>
            </React.Fragment>
            ) : (
            <React.Fragment>
            <div>
            <label className="subtitle d-flex">Tread thickness</label>
            <div className="d-flex justify-content-start">
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
            </div>
            </div>

            <div>
                <label className="subtitle d-flex">Riser thickness</label>
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
            </div>

            <div>
                <label className="subtitle d-flex">Nosing</label>
                <select defaultValue="0" onChange={props.changenosingin} className="dropdown dropdown__inch disabled">
                    {Array.from(Array(nosingInches), (e, i) => {
                        return ( <option value={i} key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select defaultValue="0" onChange={props.changenosingfr} className="dropdown dropdown__fraction disabled">
                    {Array.from(Array(nosingFractions), (e, i) => {
                        return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>

            <div>
                <label className="subtitle d-flex">Stringer Width</label>
                <select defaultValue={props.stringerin} onChange={props.changestringerin} className="dropdown dropdown__inch disabled">
                    {Array.from(stringerInches, (i) => {
                        return ( <option value={i} key={i}>{i +'"'}</option> )
                    })}
                </select>
                <select defaultValue={props.stringerfr} onChange={props.changestringerfr} className="dropdown dropdown__fraction disabled">
                    {Array.from(Array(selectFractions), (e, i) => {
                        return ( <option value={i * 0.0625} key={i * 0.0625}>{i + "/16"}</option> )
                    })}
                </select>
            </div>
            </React.Fragment>
            )}
        </div>
        
    )
}

export default Details 
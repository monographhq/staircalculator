import React from 'react';


const FloorOpening = (props) => {

    

    return (
        <div>
            <label>Floor Opening</label>
            <input type="range" defaultValue="0" min="0" max="100" onChange={props.changeOpening}/>
        </div>  
    )
}

export default FloorOpening
import React from 'react';
import Height from './inputs/height';
import FloorOpening from './inputs/flooropening';
import FloorThickness from './inputs/floorthickness';

const Headroom = () => {
    return (
    <div>
        <div>Headroom</div>
        <Height />
        <FloorOpening />
        <FloorThickness />
    </div>
    )
}

export default Headroom

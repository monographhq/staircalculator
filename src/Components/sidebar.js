import React from 'react';
import TotalRun from './inputs/totalrun';
import TotalRise from './inputs/totalrise';
import IdealRun from './inputs/idealrun';
import IdealRise from './inputs/idealrise';
import Details from './sidebarSections/details';
import StairAngle from './sidebarSections/stairangle';
import Height from './inputs/height';
import FloorOpening from './inputs/flooropening';
import FloorThickness from './inputs/floorthickness';

const Sidebar = () => {

return (
<div>
    <div>
        <div>Rise-run</div>
        <TotalRun />
        <TotalRise />
        <IdealRun />
        <IdealRise />
    </div>
    <Details />
    <div>
        <div>Headroom</div>
        <Height />
        <FloorOpening />
        <FloorThickness />
    </div>
    <StairAngle />
</div>
  );
};

export default Sidebar



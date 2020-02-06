import React from 'react';
import RiseRun from './sidebarSections/riserun';
import Details from './sidebarSections/details';
import Headroom from './sidebarSections/headroom';
import StairAngle from './sidebarSections/stairangle';

const Sidebar = () => {

return (
<div>
    <RiseRun />
    <Details />
    <Headroom />
    <StairAngle />
</div>
  );
};

export default Sidebar



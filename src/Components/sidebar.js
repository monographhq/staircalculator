import React from 'react';
import RiseRun from './riserun';
import Details from './details';
import Headroom from './headroom';
import StairAngle from './inputs/stairangle';

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



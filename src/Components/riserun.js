import React from 'react';
import TotalRun from './inputs/totalrun';
import TotalRise from './inputs/totalrise';
import IdealRun from './inputs/idealrun';
import IdealRise from './inputs/idealrise';

const RiseRun = () => {
    return (
    <div>
        <div>Rise-run</div>
        <TotalRun />
        <TotalRise />
        <IdealRun />
        <IdealRise />
    </div>
    )
}

export default RiseRun

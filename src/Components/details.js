import React from 'react';
import ImperialTwoDetails from './dropdowns/imperialTwoDetails';

const Details = () => {
    return (
        <div>
            <div>Details</div>
            <div>
                <label>Tread thickness</label>
                <ImperialTwoDetails />
            </div>
            <div>
                <label>Riser thickness</label>
                <ImperialTwoDetails />
            </div>
            <div>
                <label>Nosing</label>
                <ImperialTwoDetails />
            </div>
        </div>
    )
}

export default Details 
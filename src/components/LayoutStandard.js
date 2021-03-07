import React from 'react';

import NavBar from './NavBar';

const LayoutStandard = props => (
    <div>
        <NavBar />
        {props.children ? props.children : <p>What the fuck?</p>}
    </div>
);

export default LayoutStandard;
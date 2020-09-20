import React from "react";
import { container, label } from '../../Styles/styles'

const InactiveProgressBar = () => {
    return (
        <div style={container}>
            <div>
                <span style={label}>Waiting</span>
            </div>
        </div>

    );
};

export default InactiveProgressBar;
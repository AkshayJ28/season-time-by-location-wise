import React from 'react';
import './seasonDisplay.css';
const ErrorMsg = () => {
    return (
        <div>
            <i class="huge icons">
                <i aria-hidden="true" class="red dont big icon"></i>
                <i aria-hidden="true" class="black user icon"></i>
            </i>
            <h1 className="userText">User Denied the location Request! Please accept the Location Request.</h1>
        </div>
    );
};

export default ErrorMsg;

import React from 'react';
import './seasonDisplay.css';

const seasonConfig = {
    Summer: {
        text: "It's summer time yay!!",
        iconName: 'sun',
    },
    Winter: {
        text: "It's Winter time burr!!",
        iconName: 'snowflake',
    },
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
};

const Seasondisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1 className="text">{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default Seasondisplay;

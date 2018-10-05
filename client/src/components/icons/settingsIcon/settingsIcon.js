import React from "react";
import "./settingsIcon.css";

const icon = require("./settings.png")


class SettingsIcon extends React.Component {

    render() {
        return (
            <div className="settingsIconWrapper">
            <img className="settingsIcon" src={icon} alt="img"/>
            </div>
        )
    }
};

export default SettingsIcon;

// sideWrapper
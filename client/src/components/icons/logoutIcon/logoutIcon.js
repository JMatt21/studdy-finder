import React from "react";
import "./logoutIcon.css";

const icon = require("./logout.png")


class LogoutIcon extends React.Component {

    render() {
        return (
            <div className="logoutIconWrapper">
            <img className="logoutIcon" src={icon} alt="img"/>
            </div>
        )
    }
};

export default LogoutIcon;
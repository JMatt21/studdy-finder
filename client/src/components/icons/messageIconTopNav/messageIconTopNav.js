import React from "react";
import "./messageIconTopNav.css";

const icon = require("./chaticon.png");


class MessageIconTopNav extends React.Component {

    render() {
        return (
            <div className="messageTopNavIconWrapper">
            <img className="messageTopNavIcon" src={icon} alt="img"/>
            </div>
        )
    }
};

export default MessageIconTopNav;
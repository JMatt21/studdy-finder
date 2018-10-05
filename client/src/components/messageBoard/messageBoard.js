import React from "react";
import "./messageBoard.css";
import MessageCard from "../messageCard/index";




class MessageBoard extends React.Component {

    render() {
        return (
            <div className="messageBoardWrapper">
            <div className="spacer"></div>
                <h5 className="messageBoardHeader ubuntu">Message Center</h5>
                <div className="alert">3</div>
                <MessageCard/>
            </div>
        )
    }
};

export default MessageBoard;
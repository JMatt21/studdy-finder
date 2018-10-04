import React from "react";
import "./messageBoard.css";
import MessageCard from "../messageCard/index";




class MessageBoard extends React.Component {

    render(props) {
        return (
            <div className="messageBoardWrapper">
            <div className="spacer"></div>
                <h5 className="messageBoardHeader ubuntu">Message Center</h5>
                <div className="alert">3</div>
                <MessageCard
                user={this.props.user}
                data={this.props.data}
                />
            </div>
        )
    }
};

export default MessageBoard;
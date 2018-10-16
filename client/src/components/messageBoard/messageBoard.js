import React from "react";
import "./messageBoard.css";
import MessageCard from "../messageCard/index";


class MessageBoard extends React.Component {
    
    render() {
        console.log(this.props);
        return (
            <div className="message-board-wrapper">
                <div className="spacer"></div>
                <h5 className="message-board-header ubuntu">Message Center</h5>
                {/* <div className="alert">3</div> */}
                <MessageCard
                    {...this.props}
                    user={this.props.user}
                    data={this.props.data}
                    test={this.props.test}
                />
            </div>
        )
    }
};

export default MessageBoard;
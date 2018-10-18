import React, { Component } from "react";
import './userMessages.css';


class userMessages extends Component {

    componentDidUpdate() {
        this.refs.container.scrollTop = this.refs.container.scrollHeight;
    }

    render() {
        const { messages, userId } = this.props;
        return (
            <div ref={'container'} className="messages-wrapper">
                {messages.map((message, i) => {
                    return (
                        <div key={i} className="message-block">
                            {(message.UserId === userId ?
                                <div className="user-message-current">{message.message}</div>
                                : <div className="user-message-other">{message.message}</div>
                            )}
                            <div className="spacer" />
                        </div>
                    );
                })}

            </div>
        )
    }
};

export default userMessages;
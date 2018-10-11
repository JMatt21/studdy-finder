import React from "react";
import "./messagingCard.css";
import UserMessages from '../userMessages/index'
import API from "../../utils/API";
import socket from "../../utils/SocketAPI";

class MessagesCard extends React.Component {
    state = {
        message: '',
        roomMessages: [],
        roomId: this.props.match.params.roomid
    };

    componentDidMount() {
        this.getRoomMessages();
        socket.getMessage(text => this.updateRoomMessages(text));
    }

    handleInputChange = ({ target }) => {
        const { value, name } = target;
        this.setState({
            [name]: value
        })
    }

    mSending = event => {
        event.preventDefault();
        socket.sendMessage(this.state.message, this.state.roomId, this.props.appState.user.id);
    }

    getRoomMessages = () => {
        API.getRoomMessages(this.state.roomId)
            .then(data => this.setState({ roomMessages: data.data.Messages }))
            .catch(err => console.log(err))
    }

    updateRoomMessages = message => {
        console.log(message); //will log twice but not change the display unexpectedly so far
        this.setState({ roomMessages: this.state.roomMessages.concat(message) })
    }
    render() {
        return (
            <div className="messsaging-wrapper" >
                <div className="messaging-nav"></div>
                {/* <UserMessages /> */}

                <div className="messages-wrapper">
                    {this.state.roomMessages.map((message, i) => {
                        return (
                            <div key ={i} className="message-block">
                                {(message.UserId === this.props.appState.user.id ?
                                    <div className="user-message-current">{message.message}</div>
                                    : <div className="user-message-other">{message.message}</div>
                                )}
                                <div className="spacer" />
                            </div>
                        );
                    })}
                </div>

                <div id="user-form-wrapper">
                    <form>
                        <div className="bubble">
                            <div id="messaging-form">
                                <div className="input-field">
                                    <input type="text"
                                        className="materialize-textarea"
                                        name="message"
                                        placeholder="Write your message here..."
                                        onChange={this.handleInputChange}
                                        value={this.state.message}
                                    />
                                </div>
                            </div>
                        </div>
                        <button className="circleButton" onClick={this.mSending}>Send</button>
                    </form>
                </div>
            </div>
        );

    }


}


export default MessagesCard;

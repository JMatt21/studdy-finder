import React from "react";
import "./messagingCard.css";
import UserMessages from '../userMessages'
import API from "../../utils/API";
import socket from "../../utils/SocketAPI";

class MessagesCard extends React.Component {
    state = {
        message: '',
        roomMessages: [],
        roomId: this.props.match.params.roomid || '',
        matchedStatus: false
    };

    componentWillMount() {
        this.redirectIncorrectRoom(this.props.appState.user.id || 0);
        this.getRoomMessages(this.state.roomId);
        socket.getMessage(text => this.updateRoomMessages(text));
    }

    componentWillReceiveProps(newRoute) {
        console.log(this.state.roomId)
        this.setState({ roomId: newRoute.match.params.roomid })
        this.getRoomMessages(newRoute.match.params.roomid);
    }

    handleInputChange = ({ target }) => {
        const { value, name } = target;
        this.setState({
            [name]: value
        })
    }

    redirectIncorrectRoom = userId => {
        if (!this.state.roomId.split("+").includes(userId.toString())) {
            this.props.history.push("/messages");
        }
    }

    mSending = event => {
        event.preventDefault();
        if (this.state.roomId.split("+").includes(this.props.appState.user.id.toString())) {
            if (!this.state.matchedStatus) {
                console.log("matching ")
                const users = this.state.roomId.split("+");
                this.userMatchHandler(users[0], users[1])
                this.setState({ matchedStatus: true })
            }
            socket.sendMessage(this.state.message, this.state.roomId, this.props.appState.user.id);
        } else console.log(this.state.roomId.split("+"), this.props.appState.user.id);
    }

    getRoomMessages = (id) => {
        socket.joinRoom(id) // in case user is not in room
        API.getRoomMessages(id)
            .then(data => {
                let matchedStatus = false;
                if (data.data.Messages.length > 0)
                    matchedStatus = true;
                this.setState({
                    roomMessages: data.data.Messages,
                    matchedStatus: matchedStatus
                })
            })
            .catch(err => console.log(err))
    }

    updateRoomMessages = message => {
        // console.log(message); //will log multiple times but not change the display unexpectedly so far
        this.setState({ roomMessages: this.state.roomMessages.concat(message) })
    }

    userMatchHandler = (user1, user2) => {
        socket.matchUsers(user1, user2);
        API.matchUsers(user1, user2)
            .then(data => { console.log(data) })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="messsaging-wrapper" >
                <div className="messaging-nav"></div>
                <UserMessages messages={this.state.roomMessages} userId={this.props.appState.user.id} />
                <form>
                    <div id="user-form-wrapper">
                        <div className="bubble-1">
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
                    </div>
                </form>

            </div>
        );

    }


}


export default MessagesCard;

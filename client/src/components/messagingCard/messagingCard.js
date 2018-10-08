import React from "react";
import "./messagingCard.css";

import UserMessages from '../userMessages/index'




class MessagesCard extends React.Component {
    state = {
        message: ''
    };


    mSending = (images) => {
        images.preventDefault();


        this.setState({
            images: images
          });

        return 
        <div className="message-block">
            <div className="user-message-other">{this.state.message}</div>
            <div className="spacer"></div>
        </div>
    }


    render() {
        return (
            <div className="messsaging-wrapper" >
                <div className="messaging-nav"></div>
                <UserMessages />

                <div id="user-form-wrapper">

                    <div className="bubble">
                        <form id="messaging-form">
                            <div className="input-field">
                                <input type="text" class="materialize-textarea" placeholder="Message"></input>
                            </div>
                        </form>
                    </div>
                    <button className="circleButton" value={this.state.message} onChange={this.state.mSending}>Send</button>
                </div>
            </div>
        );

    }


}


export default MessagesCard;

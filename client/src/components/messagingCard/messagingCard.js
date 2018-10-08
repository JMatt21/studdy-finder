import React from "react";
import "./messagingCard.css";

import UserMessages from '../userMessages/index'




class MessagesCard extends React.Component {
    state = {
        message: ''
    };
    
    
    handleInputChange = ({ target }) => {
        const { value, name } = target;
        this.setState({
            [name]: value
        })
    }
    
    mSending = () => {
        
    }


    render() {
        return (
            <div className="messsaging-wrapper" >
                <div className="messaging-nav"></div>
                <UserMessages/>

                <div id="user-form-wrapper">

                    <div className="bubble">
                        <form id="messaging-form">
                            <div className="input-field">
                                <input type="text" class="materialize-textarea" placeholder="Message"></input>
                            </div>
                        </form>
                    </div>
                    <button className="circleButton" onClick={this.mSending}>Send</button>
                </div>
            </div>
        );

    }


}


export default MessagesCard;

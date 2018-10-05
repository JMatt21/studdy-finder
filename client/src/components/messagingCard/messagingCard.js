import React from "react";
import "./messagingCard.css";




class MessagesCard extends React.Component {
    render() {
        return (
            <div className="messsaging-wrapper" >
                <div className="messaging-nav"></div>

                <div id="user-form-wrapper">

                    <div className="bubble">
                        <form id="messaging-form">
                            <div className="input-field">
                                <input type="text" class="materialize-textarea" placeholder="Message"></input>
                            </div>
                        </form>
                    </div>
                    <button className="circleButton">Send</button>

                </div>
            </div>
        );
    };
}

export default MessagesCard;

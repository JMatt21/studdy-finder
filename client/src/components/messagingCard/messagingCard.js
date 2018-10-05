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
                            <input type="text" value="Hunter" type="text">
                            
                            </input>

                        </div>
                        </form>
                    </div>
                    <input type="submit" class="btn btn-primary" value="Send" />

                </div>
            </div>
        );
    };
}

export default MessagesCard;

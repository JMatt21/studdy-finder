import React from "react";
import "./messagingCard.css";




class MessagesCard extends React.Component {
    state = {
        userId: '',
        timestamp: 'no timestamp yet',
    };
    
    
    handleInputChange = ({ target }) => {
        const { value, name } = target;
        this.setState({
            [name]: value
        })
    }
    
    mSending = () => {
    console.log("Bob Ross");
    }


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
                    <button className="circleButton" onClick={this.mSending}>Send</button>
                </div>
            </div>
        );

    }


}


export default MessagesCard;

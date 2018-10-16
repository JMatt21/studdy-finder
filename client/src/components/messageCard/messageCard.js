import React from "react";
import { Link } from "react-router-dom";
import "./messageCard.css";


// let icon = require("./chaticon.png");

// function roomName(id1, id2) {
//     if (id1 > id2)
//         return `${id2}+${id1}`
//     else
//         return `${id1}+${id2}`
// }


class MessageCard extends React.Component {

    render() {
        return (
            <div>
                {this.props.test.map((Match, index) => {
                    // if ({Match}.message) {
                    return (
                        <div key={index} className="message-card-tab">
                            <div className="message-image-wrapper">
                            <img className="message-card-image" src={Match.image || "https://via.placeholder.com/250x275"} alt="img" />
                            </div>
                            <div className="message-card-contents">
                            <div className="message-card-name">
                            <h5 className="message-card-name righteous">{Match.name || Match.email}</h5></div>
                            <Link className="btn" to="/messages" /* to={roomLink(this.props, this.props.user.id, Match.id)}> */ >Message</Link> 
                            </div>                          
                        </div>
                    )
                    // }
                    // else {
                    //     return "Nothing"
                    // }
                })}
            </div>
        )
    }
};

export default MessageCard;
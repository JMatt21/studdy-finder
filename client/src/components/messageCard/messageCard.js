import React from "react";
import { Link } from "react-router-dom";
import "./messageCard.css";


let icon = require("./chaticon.png");

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
                        <div key={index} className="card-wrapper">
                            <div className="image-wrapper">
                                <div className="message-name">{Match.name || Match.email}</div>
                                <img className="message-image" src={Match.image || "https://via.placeholder.com/250x275"} alt="img" />
                                {/* <Link to={`/messages/${roomName(this.props.user.id, Match.id)}`}> */}
                                <Link to="/messages">
                                    {/* <Link to={roomLink(this.props, this.props.user.id, Match.id)}> */}
                                    <div className="message-button"><img className="message-icon" src={icon} alt="img" /></div>
                                </Link>
                            </div>
                            <div className="message-info">
                                <ul>
                                    {(Match.beginnerSkills ?
                                        Match.beginnerSkills.map((subject, i) => {
                                            return (<li key={i} className="message-li">{subject}</li>)
                                        })
                                        :
                                        ''
                                    )}
                                </ul>
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
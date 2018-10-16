import React from "react";
import { Link } from "react-router-dom";
import "./messageCard.css";


let icon = require("./chaticon.png");

function roomName(id1, id2) {
    if (id1 > id2)
        return `${id2}+${id1}`
    else
        return `${id1}+${id2}`
}


class MessageCard extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.data.map((Match, index) => {
                    return (
                        <div key={index} className="card-wrapper">
                            <div className="image-wrapper">
                                <div className="message-name">{Match.name || Match.email}</div>
                                <img className="message-image" src={Match.image || "https://via.placeholder.com/250x275"} alt="img" />
                                <Link to={`/messages/${roomName(this.props.user.id, Match.id)}`}>
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
                })}
            </div>
        )
    }
};

export default MessageCard;
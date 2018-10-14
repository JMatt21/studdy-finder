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
        return (
            <div>
                {this.props.data.map((Match, index) => {
                    // if ({Match}.message) {
                    return (
                        <div key={index} className="cardWrapper ubuntu">
                            <div className="imageWrapper">
                                <div className="messageName">{Match.name || Match.email}</div>
                                <img className="messageImage" src={Match.image || "https://via.placeholder.com/250x275"} alt="img" />
                                <Link to={`/messages/${roomName(this.props.user.id, Match.id)}`}>
                                    {/* <Link to={roomLink(this.props, this.props.user.id, Match.id)}> */}
                                    <div className="messageButton"><img className="messageIcon" src={icon} alt="img" /></div>
                                </Link>
                            </div>
                            <div className="messageInfo">
                                <ul>
                                    {(Match.beginnerSkills ?
                                        Match.beginnerSkills.map((subject, i) => {
                                            return (<li key={i} className="messageLi">{subject}</li>)
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
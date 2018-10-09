import React from "react";
import { Link } from "react-router-dom";
import "./messageCard.css";


let icon = require("./chaticon.png");


class MessageCard extends React.Component {

    render() {
        return (
            <div>
                {this.props.data.map(function ({ Match }, index) {
                    // if (element.message) {
                    return (
                        <div key={index} className="cardWrapper ubuntu">
                            <div className="imageWrapper">
                                <div className="messageName">{Match.name || ''}</div>
                                <img className="messageImage" src={Match.image || "https://via.placeholder.com/250x275"} alt="img" />
                                <Link to="messages/6+8">
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
                })}
            </div>
        )
    }
};

export default MessageCard;
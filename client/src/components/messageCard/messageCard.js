import React from "react";
import { Link } from "react-router-dom";
import "./messageCard.css";


let icon = require("./chaticon.png");


class MessageCard extends React.Component {

    render() {
        return (
            <div>
                {this.props.data.map(function (element, index) {
                    if (element.message) {
                        return (
                            <div key={index} className="cardWrapper ubuntu">
                                <div className="imageWrapper">
                                    <div className="messageName">{`${element.firstName} ${element.lastName}`}</div>
                                    <img className="messageImage" src={element.image} alt="img" />
                                    <Link to="messages/6+8">
                                    <div className="messageButton"><img className="messageIcon" src={icon} alt="img" /></div>
                                    </Link>
                                </div>
                                <div className="messageInfo">
                                    <ul>
                                        {element.subjects.map((subject, i) => {
                                            return (<li key={i} className="messageLi">{subject}</li>)

                                        })}
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
};

export default MessageCard;
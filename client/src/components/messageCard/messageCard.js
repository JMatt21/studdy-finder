import React from "react";
import { Link } from "react-router-dom";
import "./messageCard.css";


let icon = require("./chaticon.png");


class MessageCard extends React.Component {

    render() {
        return (
            <div>
                {this.props.data.map((element, index) => {
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
<<<<<<< HEAD
                                        {element.subjects.map((subject, index) => {
                                            return(<li key={index} className="messageLi">{subject}</li>)
                                         
                            })}
=======
                                        {element.subjects.map((subject, i) => {
                                            return (<li key={i} className="messageLi">{subject}</li>)

                                        })}
>>>>>>> e6331d2da7fa623b848bdc5ca176b97b0cd60cca
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                    else{
                        return "Nothing";
                    }
                })}
            </div>
        )
    }
};

export default MessageCard;
import React from "react";
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
                                    <div className="messageButton"><img className="messageIcon" src={icon} alt="img" /></div>
                                </div>
                                <div className="messageInfo">
                                    <ul>
                                        {element.subjects.map((subject, index) => {
                                            return(<li key={index} className="messageLi">{subject}</li>)
                                         
                            })}
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
import React from "react";
import "./messageCard.css";


let icon = require("./chaticon.png");


class MessageCard extends React.Component {

    render() {
        return (
            <div>
                <div className="cardWrapper ubuntu">
                    <div className="imageWrapper">
                        <div className="messageName">Ryan T.</div>
                        <img className="messageImage" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        <div className="messageButton"><img className="messageIcon" src={icon} /></div>
                    </div>
                    <div className="messageInfo">
                        <ul>
                            {/* will probably need to make a list component */}
                            <li className="messageLi">Javascript</li>
                            <li className="messageLi">React.js</li>
                            <li className="messageLi">mySQL</li>
                            <li className="messageLi">MongoDB</li>
                            <li className="messageLi">Javascript</li>
                            <li className="messageLi">React.js</li>
                            <li className="messageLi">mySQL</li>
                            <li className="messageLi">MongoDB</li>
                        </ul>
                    </div>
                </div>

                <div className="cardWrapper ubuntu">
                    <div className="imageWrapper">
                        <div className="messageName">Tiffiny S.</div>
                        <img className="messageImage" src="https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        <div className="messageButton"><img className="messageIcon" src={icon} /></div>
                    </div>
                    <div className="messageInfo">
                        <ul>
                            {/* will probably need to make a list component */}
                            <li className="messageLi">Javascript</li>
                            <li className="messageLi">React.js</li>
                            <li className="messageLi">mySQL</li>
                            <li className="messageLi">MongoDB</li>
                            <li className="messageLi">Javascript</li>
                            <li className="messageLi">React.js</li>
                            <li className="messageLi">mySQL</li>
                            <li className="messageLi">MongoDB</li>
                        </ul>
                    </div>
                </div>

                <div className="cardWrapper ubuntu">
                    <div className="imageWrapper">
                        <div className="messageName">Geoff H.</div>
                        <img className="messageImage" src="https://cdn.pixabay.com/photo/2016/11/08/16/03/manager-1808728_1280.jpg" />
                        <div className="messageButton"><img className="messageIcon" src={icon} /></div>
                    </div>
                    <div className="messageInfo">
                        <ul>
                            {/* will probably need to make a list component */}
                            <li className="messageLi">Javascript</li>
                            <li className="messageLi">React.js</li>
                            <li className="messageLi">mySQL</li>
                            <li className="messageLi">MongoDB</li>
                            <li className="messageLi">Javascript</li>
                            <li className="messageLi">React.js</li>
                            <li className="messageLi">mySQL</li>
                            <li className="messageLi">MongoDB</li>
                        </ul>
                    </div>
                </div>

                <div className="cardWrapper ubuntu">
                    <div className="imageWrapper">
                        <div className="messageName">Ron P.</div>
                        <img className="messageImage" src="https://cdn.pixabay.com/photo/2018/03/31/16/23/african-american-3278519_1280.jpg" />
                        <div className="messageButton"><img className="messageIcon" src={icon} /></div>
                    </div>
                    <div className="messageInfo">
                        <ul>
                            {/* will probably need to make a list component */}
                            <li className="messageLi">Javascript</li>
                            <li className="messageLi">React.js</li>
                            <li className="messageLi">mySQL</li>
                            <li className="messageLi">MongoDB</li>
                            <li className="messageLi">Javascript</li>
                            <li className="messageLi">React.js</li>
                            <li className="messageLi">mySQL</li>
                            <li className="messageLi">MongoDB</li>
                        </ul>
                    </div>
                </div>

                                <div className="cardWrapper ubuntu">
                    <div className="imageWrapper">
                        <div className="messageName">Joseph B.</div>
                        <img className="messageImage" src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <div className="messageButton"><img className="messageIcon" src={icon} /></div>
                    </div>
                    <div className="messageInfo">
                        <ul>
                            {/* will probably need to make a list component */}
                            <li className="messageLi">Javascript</li>
                            <li className="messageLi">React.js</li>
                            <li className="messageLi">mySQL</li>
                            <li className="messageLi">MongoDB</li>
                            <li className="messageLi">Javascript</li>
                            <li className="messageLi">React.js</li>
                            <li className="messageLi">mySQL</li>
                            <li className="messageLi">MongoDB</li>
                        </ul>
                    </div>
                </div>



            </div>
        )
    }
};

export default MessageCard;
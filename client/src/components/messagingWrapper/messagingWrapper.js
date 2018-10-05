import React from "react";
import "./messagingWrapper.css";
import TopNavBar from "../topNavBar/index";
import MessageBoard from "../messageBoard/index";
import MessagingCard from "../messagingCard/index";


class MessagingWrapper extends React.Component {
    render() {
        return (
            <div>

                <TopNavBar />
                <div className="grid-wrapper">
                    <div className="grid-container">
                        <div>
                            <div className="sideWrapper">
                            </div>
                        </div>
                        <div>
                            <div className="sectionWrapper">
                                <MessagingCard/>

                            </div>
                        </div>
                        <div>
                            <div className="sideWrapper">
                                <MessageBoard

                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

export default MessagingWrapper;

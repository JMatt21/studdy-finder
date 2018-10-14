import React from "react";
import "./messagingWrapper.css";
import TopNavBar from "../topNavBar/index";
import MessageBoard from "../messageBoard/index";
import MessagingCard from "../messagingCard/index";


let MessagingWrapper = (props) => {
    const matchData = props.appState.user.Matches || [];
    return (
        <div>
            <TopNavBar {...props}/>
            <div className="grid-wrapper">
                <div className="grid-container">
                    <div>
                        <div className="sideWrapper">
                        </div>
                    </div>
                    <div>
                        <div className="sectionWrapper">
                            <MessagingCard {...props}/>

                        </div>
                    </div>
                    <div>
                        <div className="sideWrapper">
                            <MessageBoard
                                data={matchData}
                                user={props.appState.user}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

};

export default MessagingWrapper;
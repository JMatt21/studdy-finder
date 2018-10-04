import React from "react";
import "./messages.css";
import TopNavBar from "../topNavBar/index";
import MessageBoard from "../messageBoard/index";




class Messages extends React.Component {

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
                                
                            </div>
                        </div>
                        <div>
                            <div className="sideWrapper">
                                <MessageBoard />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

export default Messages;

import React from "react";
import "./container.css";
import TopNavBar from "../topNavBar/index";
import MainSearch from "../mainSearch/index";
import MainCarousel from "../carousel/index";
import MessageBoard from "../messageBoard/index";
import SearchResults from "../searchResults/index";



class Container extends React.Component {

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
                                <MainCarousel/>
                                <MainSearch/>
                                <SearchResults/>
                            </div>
                        </div>
                        <div>
                        <div className="sideWrapper">
                                <MessageBoard/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

export default Container;

// sideWrapper
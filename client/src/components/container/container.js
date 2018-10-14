import React from "react";
import "./container.css";
import TopNavBar from "../topNavBar/index";
import MainSearch from "../mainSearch/index";
import MainCarousel from "../carousel/index";
import MessageBoard from "../messageBoard/index";
import SearchResults from "../searchResults/index";

import API from "../../utils/API";
import passport from "../../utils/PassportAPI"

class Container extends React.Component {

    state = {
        user: {},
        rooms: []
    };

    componentDidMount() {
        passport.getUserInfo()
            .then(({ data }) => {
                console.log("Current State:");
                this.setState({
                    user: data
                })
                this.getUserRooms();
            })
    }

    getUserRooms() {
        API.getRooms(this.state.userId)
            .then((data) => {
                this.setState({ rooms: data.rooms })
                console.log(this.state);
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <TopNavBar {...this.props} />
                <div className="grid-wrapper">
                    <div className="grid-container">
                        <div>
                            <div className="sideWrapper">
                            </div>
                        </div>
                        <div>
                            <div className="sectionWrapper">
                                <MainCarousel />
                                <MainSearch />
                                <SearchResults />
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

export default Container;

// sideWrapper
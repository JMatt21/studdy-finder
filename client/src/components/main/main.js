import React from "react";
import "./main.css";
import TopNavBar from "../topNavBar/index";
import MainSearch from "../mainSearch/index";
import MainCarousel from "../carousel/index";
import MessageBoard from "../messageBoard/index";

// apis
import API from "../../utils/API";
// import passport from "../../utils/PassportAPI";
import socket from "../../utils/SocketAPI";

// testdata
import { testData } from "../../assets/testFillerData/testData";

class Main extends React.Component {
    componentDidMount() {
        if (this.props.appState.user.id) {
            this.getUserRooms(this.props.appState.user.id);
        }
    }

    getUserRooms(id) {
        socket.socketUser(id);
        API.getUsersRooms(id)
            .then((data) => {
                console.log(`ROOMS: ${data.data}`);
                this.props.setData(data.data, 'rooms');
                socket.massJoinRoom(this.props.appState.rooms);
            })
            .catch(err => console.log(err));
    }

    searchForUsers = event => {
        event.preventDefault();
        const search = event.target.search.value.split(" ");
        const { latitude, longitude } = this.props.appState.user;
        API.searchForUsers(search, latitude, longitude, 10000) // temp distance
            .then(data => {
                // this.setState({ data: data.data })
                this.props.setData(data.data, 'data');
                // console.log(data.data)
            })
            .catch(err => console.log(err));
    }

    render() {
        const { user, data, carousel } = this.props.appState;
        const matchData = user.Matches || [];
        return (
            <div>
                <TopNavBar
                    {...this.props}
                    test={testData}
                />
                <div className="grid-container">
                    <div className="nav-area">
                        {/* TopNavBar Rendered Outside grid-container & overtop nav-area */}
                    </div>
                    <div className="left-area">
                        {/* Currently Just Empty Space "future feature space?" */}
                    </div>
                    <div className="center-area">
                        <h5 className="nearby-search-title">Nearby Search</h5>
                        <MainCarousel
                            user={user}
                            carouselArray={carousel} //populating with dummy data at the moment
                        />
                        <MainSearch
                            onSubmit={this.searchForUsers}
                            user={user}
                            data={data}
                            test={testData} //populating with dummy data at the moment
                        />
                    </div>
                    <div className="right-area">
                        <MessageBoard
                            user={user}
                            data={matchData}
                            test={testData} //populating with dummy data at the moment
                        />
                    </div>
                </div>
            </div>
        )
    }
};

export default Main;

// sideWrapper
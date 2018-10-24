import React from "react";
import "./main.css";
import TopNavBar from "../topNavBar/index";
import MainSearch from "../mainSearch/index";
import MainCarousel from "../carousel/index";
import MessageBoard from "../messageBoard/index";
// import Settings from "../settings/index";

// apis
import API from "../../utils/API";
// import passport from "../../utils/PassportAPI";
import socket from "../../utils/SocketAPI";

// testdata
import { testData } from "../../assets/testFillerData/testData";
// carousel filler
import carouselFiller from "../../assets/testFillerData/carouselFiller"
class Main extends React.Component {
    state = {
        noCarouselData: true
    }
    componentDidMount() {
        if (this.props.appState.user.id) {
            const { id, beginnerSkills, latitude, longitude } = this.props.appState.user;
            this.getUserRooms(this.props.appState.user.id);
            API.searchForUsers(beginnerSkills, latitude, longitude, 10000000, id)
                .then(({ data }) => {
                    if (data.length > 0) {
                        this.props.setData(data, 'carousel');
                        this.setState({ noCarouselData: false })
                        console.log(data);
                    }
                    else {
                        this.props.setData(carouselFiller, 'carousel');
                        this.setState({ noCarouselData: true })
                    }
                })
        }
    }

    componentWillUnmount() {
        this.props.setData([], 'data');
    }
    componentDidCatch() {
        console.log("Whoops! Something broke. Redirecting...")
        this.props.setData(carouselFiller, 'carousel');
        this.props.history.push("/settings/interests");
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
        const { latitude, longitude, id } = this.props.appState.user;
        API.searchForUsers(search, latitude, longitude, 10000, id) 
            .then(data => {
                
                this.props.setData(data.data, 'data');
               
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
                    data={matchData}
                    user={user}
                />
                <div className="main-grid-container">
                    <div className="nav-area">
                        {/* TopNavBar Rendered Outside grid-container & overtop nav-area */}
                    </div>
                    <div className="left-area">
                        {/* Currently Just Empty Space "future feature space?" */}
                    </div>
                    <div className="center-area">
                        <h5 className="nearby-search-title">Nearby Users</h5>
                            {(!this.state.noCarouselData ? <MainCarousel user={user} carouselArray={carousel}/> : 
                            <div className="no-nearby-matches"><p className="no-nearby-text">Sorry :(<br/>No Nearby Matches Found<br/><br/>Try Adding more Interests!</p></div>
)}
                        <MainSearch
                            onSubmit={this.searchForUsers} /* Returns Any Users who's has a matching subject to the Users search input*/
                            user={user}
                            data={data}
                            testData={testData}
                        />
                    </div>
                    <div className="right-area">
                        <MessageBoard
                            user={user}
                            data={matchData}
                            testData={testData}
                        />
                    </div>
                </div>
            </div>
        )
    }
};

export default Main;

// sideWrapper
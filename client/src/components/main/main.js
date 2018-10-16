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

// const testUser = {
//     name: "Chance",
//     lastName: "Musselman",
//     beginnerSkills: ["Javascript", "React.js", "Angular.js", "MongoDB", "mySQL", "Node.js", "CSS3", "HTML"],
//     distanceLimit: 15,
//     distance: 0,
//     image: "",
//     message: true
// }
const test_data = [
    {
        name: "Geoff",
        beginnerSkills: ["Javascript", "React.js", "Angular.js", "Algorithms", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        distanceLimit: 15,
        distance: 20,
        image: "https://cdn.pixabay.com/photo/2016/11/08/16/03/manager-1808728_1280.jpg",
        message: false
    },
    {
        name: "Ryan",
        lastName: "Treant",
        beginnerSkills: ["Java", ".NET", "Angular.js", "Calculus", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        distanceLimit: 15,
        distance: 10,
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        message: true
    },
    {
        name: "Ron",
        lastName: "Parker",
        beginnerSkills: ["Javascript", "React.js", "Angular.js", "Algorithms", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        distanceLimit: 15,
        distance: 9,
        image: "https://cdn.pixabay.com/photo/2018/03/31/16/23/african-american-3278519_1280.jpg",
        message: true
    },
    {
        name: "Tiffany",
        lastName: "Sralek",
        beginnerSkills: ["Interior Design", "React.js", "Angular.js", "Algorithms", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        distanceLimit: 15,
        distance: 40,
        image: "https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        message: true
    },
    {
        name: "Joseph",
        lastName: "Brakman",
        beginnerSkills: ["Javascript", "React.js", "Angular.js", "Algorithms", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        distanceLimit: 15,
        distance: 5,
        image: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        message: false
    },
    {
        name: "Erica",
        lastName: "Dracony",
        beginnerSkills: ["Javascript", "React.js", "Angular.js", "Algorithms", "Web Development", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        distanceLimit: 15,
        distance: 15,
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        message: false
    },
    {
        name: "Chris",
        lastName: "Wong",
        beginnerSkills: ["Javascript", "React.js", "Angular.js", "Algorithms", "Leadership", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        distanceLimit: 45,
        distance: 15,
        image: "https://images.pexels.com/photos/936593/pexels-photo-936593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        message: true
    }
]



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
        // console.log(event.target.search.value);
        const search = event.target.search.value;
        API.searchForUsers(search)
            .then(data => {
                // this.setState({ data: data.data })
                this.props.setData(data.data, 'data');
                // console.log(data.data)
            })
            .catch(err => console.log(err));
    }

    render() {
        const { user, data } = this.props.appState;
        const matchData = user.Matches || [];
        return (
            <div>
                <TopNavBar
                    {...this.props}
                    test={test_data} /* Needs Same Data as Message Board (Matches w/ messages)*/
                />
                <div className="grid-container">
                    <div className="nav-area">
                    {/* TopNavBar Rendered Outside grid-container & overtop nav-area */}
                    </div>
                    <div className="left-area">
                        {/* Currently Just Empty Space "future feature space?" */}
                    </div>
                    <div className="center-area">
                        <h5 className="nearby-search-title">Nearby Users</h5>
                        <MainCarousel
                            carouselArray={test_data} //populating with dummy data at the moment /* Needs Location Filtered Results (closest users)*/
                        />
                        <MainSearch
                            onSubmit={this.searchForUsers} /* Returns Any Users who's has a matching subject to the Users search input*/
                            user={user}
                            data={data}

                            test={test_data} //populating with dummy data at the moment
                        />
                    </div>
                    <div className="right-area">
                        <MessageBoard
                            user={user}
                            data={matchData}
                            test={test_data} //populating with dummy data at the moment /* Needs Data of (Matches w/ messages)*/
                        />
                    </div>
                </div>
            </div>
        )
    }
};

export default Main;

// sideWrapper
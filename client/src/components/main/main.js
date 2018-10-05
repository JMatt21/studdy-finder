import React from "react";
import "./main.css";
import TopNavBar from "../topNavBar/index";
import MainSearch from "../mainSearch/index";
import MainCarousel from "../carousel/index";
import MessageBoard from "../messageBoard/index";
// apis
import API from "../../utils/API"
import passport from "../../utils/PassportAPI"
const testUser = {
    firstName: "Chance",
    lastName: "Musselman",
    subjects: ["Javascript", "React.js", "Angular.js", "MongoDB", "mySQL", "Node.js", "CSS3", "HTML"],
    distanceLimit: 15,
    distance: 0,
    image: "",
    message: true
}
const data = [
    {
        firstName: "Geoff",
        lastName: "Hoffman",
        subjects: ["Javascript", "React.js", "Angular.js", "Algorithms", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        distanceLimit: 15,
        distance: 20,
        image: "https://cdn.pixabay.com/photo/2016/11/08/16/03/manager-1808728_1280.jpg",
        message: false
    },
    {
        firstName: "Ryan",
        lastName: "Treant",
        subjects: ["Java", ".NET", "Angular.js", "Calculus", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        distanceLimit: 15,
        distance: 10,
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        message: true
    },
    {
        firstName: "Ron",
        lastName: "Parker",
        subjects: ["Javascript", "React.js", "Angular.js", "Algorithms", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        distanceLimit: 15,
        distance: 9,
        image: "https://cdn.pixabay.com/photo/2018/03/31/16/23/african-american-3278519_1280.jpg",
        message: true
    },
    {
        firstName: "Tiffiny",
        lastName: "Sralek",
        subjects: ["Interior Design", "React.js", "Angular.js", "Algorithms", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        distanceLimit: 15,
        distance: 40,
        image: "https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        message: true
    },
    {
        firstName: "Joseph",
        lastName: "Brakman",
        subjects: ["Javascript", "React.js", "Angular.js", "Algorithms", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        distanceLimit: 15,
        distance: 5,
        image: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        message: false
    },
    {
        firstName: "Erica",
        lastName: "Dracony",
        subjects: ["Javascript", "React.js", "Angular.js", "Algorithms", "Web Development", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        distanceLimit: 15,
        distance: 15,
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        message: false
    },
    {
        firstName: "Chris",
        lastName: "Wong",
        subjects: ["Javascript", "React.js", "Angular.js", "Algorithms", "Leadership", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        distanceLimit: 45,
        distance: 15,
        image: "https://images.pexels.com/photos/936593/pexels-photo-936593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        message: true
    }
]

class Main extends React.Component {
    state = {
        user: {},
        rooms: [],
        data: []
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

    searchForUsers = event => {
        event.preventDefault();
        // console.log(event.target.search.value);
        const search = event.target.search.value;
        API.searchForUsers(search)
            .then(data => {
                this.setState({ data: data.data}) 
                // console.log(data.data)
            })
            .catch(err => console.log(err));
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         user: testUser,
    //         data: data,
    //         carouselArray: data.filter(function (element, index) {
    //             if (element.distance <= testUser.distanceLimit) {
    //                 return element;
    //             }
    //         })
    //     };
    // }


    render() {
        console.log(this.state);
        return (
            <div>
                <TopNavBar
                    {...this.props}
                />
                <div className="grid-wrapper">
                    <div className="grid-container">
                        <div>
                            <div className="sideWrapper">
                            </div>
                        </div>
                        <div>
                            <div className="sectionWrapper">
                                {/* <MainCarousel
                                    carouselArray={this.state.carouselArray}
                                /> */}
                                <MainSearch
                                    onSubmit={this.searchForUsers}
                                    user={this.state.user}
                                    data={this.state.data}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="sideWrapper">
                                <MessageBoard
                                    user={this.state.user}
                                    data={this.state.data}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

export default Main;

// sideWrapper
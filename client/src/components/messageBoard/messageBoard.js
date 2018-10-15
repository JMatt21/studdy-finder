import React from "react";
import "./messageBoard.css";
import MessageCard from "../messageCard/index";

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


class MessageBoard extends React.Component {

    render() {
        return (
            <div className="message-board-wrapper">
                <div className="spacer"></div>
                <h5 className="message-board-header ubuntu">Message Center</h5>
                {/* <div className="alert">3</div> */}
                <MessageCard
                    {...this.props}
                    user={this.props.user}
                    data={this.props.data}
                />
            </div>
        )
    }
};

export default MessageBoard;
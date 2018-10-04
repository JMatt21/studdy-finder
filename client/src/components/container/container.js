import React from "react";
import "./container.css";
import TopNavBar from "../topNavBar/index";
import MainSearch from "../mainSearch/index";
import MainCarousel from "../carousel/index";
import MessageBoard from "../messageBoard/index";
import SearchResults from "../searchResults/index";

const testUser = {
    firstName: "Chance",
    lastName: "Musselman",
    subjects: ["Javascript", "React.js", "Angular.js", "MongoDB", "mySQL", "Node.js", "CSS3", "HTML"],
    nearby: true,
    image: ""
}

const data = [
    {
        firstName: "Geoff",
        lastName: "Hoffman",
        subjects: ["Javascript", "React.js", "Angular.js", "Algorithms", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        nearby: true,
        image: ""
    },
    {
        firstName: "Ryan",
        lastName: "Treant",
        subjects: ["Javascript", "React.js", "Angular.js", "Algorithms", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        nearby: true,
        image: ""
    },
    {
        firstName: "Ron",
        lastName: "Parker",
        subjects: ["Javascript", "React.js", "Angular.js", "Algorithms", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        nearby: true,
        image: ""
    },
    {
        firstName: "Tiffiny",
        lastName: "Sralek",
        subjects: ["Javascript", "React.js", "Angular.js", "Algorithms", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        nearby: true,
        image: ""
    },
    {
        firstName: "Joseph",
        lastName: "Brakman",
        subjects: ["Javascript", "React.js", "Angular.js", "Algorithms", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
        nearby: false,
        image: ""
    }
]


class Container extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                user: testUser, 
                data: data
                 
            };
          }

    render() {
        return (
            <div>
                <TopNavBar
                    user={this.state.user}
                    data={this.state.data}
                />
                <div className="grid-wrapper">
                    <div className="grid-container">
                        <div>
                            <div className="sideWrapper">
                            </div>
                        </div>
                        <div>
                            <div className="sectionWrapper">
                                <MainCarousel
                                    user={this.state.user} 
                                    data={this.state.data}
                                />
                                <MainSearch 
                                user={this.state.user}
                                data={this.state.data}
                                />
                                <SearchResults
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

export default Container;

// sideWrapper
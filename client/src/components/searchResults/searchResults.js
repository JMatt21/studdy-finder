import React from "react";
import "./searchResults.css";
import { Card } from "react-materialize";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
// import {testData} from "../../assets/testFillerData/testData";

function roomName(id1, id2) {
    if (id1 > id2)
        return `${id2}+${id1}`
    else
        return `${id1}+${id2}`
}


class SearchResults extends React.Component {
    render() {
        // const miles = (this.props.miles ? `this.props.miles miles` : `undefined`);
        const displaySearchResults = this.props.searchData.map((element, index) => {
            // const displaySearchResults = testData.map((element, index) => {
            return (
                <Animated animationIn="fadeInUp" key={index}>
                <Card className="search-result" header={<img className="search-results-image" src={element.image} alt="user_image"></img>}>
                    <div className="search-results-content">
                        <div className="name-and-distance">
                            <div className="search-results-name righteous">{`${element.name}`}</div>
                            <div className="search-results-distance">{`${Math.round(element.distance)} miles away`}</div>
                        </div>
                        <table>
                        <tbody className="search-results-table">
                            {element.beginnerSkills.map((subject, i) => {
                                return (
                                    <tr key={i} className="search-results-tr">
                                        <td className="search-results-td">{subject}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <Link to={`/messages/${roomName(this.props.user.id, element.id)}`} className="search-results-msg-btn btn">Message</Link>
                        </table>
                    </div>
                </Card>
                </Animated>
            )
        });

        let scrollToView = () => {
            document.getElementById('the-search').scrollIntoView({block: 'start', behavior: 'smooth'});
        }

        return (
            // <Animated animationIn="fadeInUp">
            <div onLoad={scrollToView} id="the-results"  className="search-results-wrapper">
                {displaySearchResults}
            </div>
            //</Animated>
        )
    }
};

export default SearchResults;
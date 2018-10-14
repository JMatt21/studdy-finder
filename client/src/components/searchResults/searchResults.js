import React from "react";
import "./searchResults.css";
import { Card, Table } from "react-materialize";
import { Link } from "react-router-dom";

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
            return (
                <div key={index} className="searchResult">
                    <Card horizontal header={
                        <img className="searchResultImage" src={element.image || "https://via.placeholder.com/250x275"} alt={`${element.name || element.email}`} />}>
                        <Link className="ubuntu btn resultButton"
                            to={`/messages/${roomName(this.props.user.id, element.id)}`}>
                            Message</Link>
                        <p className="nearby">Distance: {element.miles || "undefined"} </p>
                        <h5 className="righteous">{element.name || element.email}</h5>
                        <Table>
                            <tbody>
                                {element.beginnerSkills.map((subject, i) => {
                                    return (
                                        <tr key={i}>
                                            <td className="carouselTd">{subject}</td>
                                        </tr>
                                    )

                                })}
                            </tbody>
                        </Table>
                    </Card>
                </div>
            )
        });

        return (
            <div className="resultsWrapper">
                {displaySearchResults}
            </div>
        )
    }
};

export default SearchResults;